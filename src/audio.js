// ------------------------------------------------------------
// FEMBOYS — procedural sound system
// A tiny synth-pop band that lives in your browser.
// ------------------------------------------------------------

const BPM = 128;
const STEP = 60 / BPM / 4;

function midiToHz(note) {
  return 440 * Math.pow(2, (note - 69) / 12);
}

export class AudioEngine {
  constructor() {
    this.ctx = null;
    this.master = null;
    this.musicBus = null;
    this.reverb = null;
    this.reverbGain = null;
    this.noise = null;
    this.muted = false;
    this.started = false;
    this.timer = null;
    this.step = 0;
    this.nextStepTime = 0;
    this.startTime = 0;
    this.musicPlaying = false;
    this.bar = 0;
  }

  ensure() {
    if (this.ctx) {
      if (this.ctx.state === 'suspended') this.ctx.resume();
      return true;
    }
    const Ctx = window.AudioContext || window.webkitAudioContext;
    if (!Ctx) return false;

    this.ctx = new Ctx({ latencyHint: 'interactive' });
    this.master = this.ctx.createGain();
    this.master.gain.value = this.muted ? 0 : 0.78;

    const compressor = this.ctx.createDynamicsCompressor();
    compressor.threshold.value = -15;
    compressor.knee.value = 12;
    compressor.ratio.value = 4;
    compressor.attack.value = 0.005;
    compressor.release.value = 0.24;

    this.master.connect(compressor);
    compressor.connect(this.ctx.destination);

    this.musicBus = this.ctx.createGain();
    this.musicBus.gain.value = 0.52;
    this.musicBus.connect(this.master);

    this.reverb = this.ctx.createConvolver();
    this.reverb.buffer = this.makeImpulse(2.1, 3.2);
    this.reverbGain = this.ctx.createGain();
    this.reverbGain.gain.value = 0.25;
    this.reverb.connect(this.reverbGain);
    this.reverbGain.connect(this.master);

    this.noise = this.makeNoiseBuffer(2);

    if (this.ctx.state === 'suspended') this.ctx.resume();
    this.started = true;
    return true;
  }

  makeImpulse(seconds, decay) {
    const rate = this.ctx.sampleRate;
    const length = Math.floor(rate * seconds);
    const buffer = this.ctx.createBuffer(2, length, rate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buffer.getChannelData(ch);
      for (let i = 0; i < length; i++) {
        const t = i / length;
        data[i] = (Math.random() * 2 - 1) * Math.pow(1 - t, decay) * (1 - t * 0.2);
      }
    }
    return buffer;
  }

  makeNoiseBuffer(seconds) {
    const rate = this.ctx.sampleRate;
    const length = Math.floor(rate * seconds);
    const buffer = this.ctx.createBuffer(1, length, rate);
    const data = buffer.getChannelData(0);
    for (let i = 0; i < length; i++) data[i] = Math.random() * 2 - 1;
    return buffer;
  }

  setMuted(muted) {
    this.muted = muted;
    if (this.master) {
      const now = this.ctx.currentTime;
      this.master.gain.cancelScheduledValues(now);
      this.master.gain.linearRampToValueAtTime(muted ? 0 : 0.78, now + 0.12);
    }
  }

  toggleMute() {
    this.setMuted(!this.muted);
    return this.muted;
  }

  // ---------------- SFX ----------------

  blip(freq = 660, duration = 0.055, type = 'sine', volume = 0.045) {
    if (!this.ensure()) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(volume, t + 0.006);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + duration);
    osc.connect(gain);
    gain.connect(this.master);
    osc.start(t);
    osc.stop(t + duration + 0.01);
  }

  click() {
    this.blip(720, 0.045, 'triangle', 0.04);
  }

  swoosh() {
    if (!this.ensure()) return;
    const t = this.ctx.currentTime;
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.Q.value = 0.7;
    filter.frequency.setValueAtTime(420, t);
    filter.frequency.exponentialRampToValueAtTime(2800, t + 0.25);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.035, t + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.32);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    src.start(t);
    src.stop(t + 0.34);
  }

  collect(level = 0) {
    if (!this.ensure()) return;
    const notes = [880, 1046.5, 1318.5, 1568];
    const note = notes[Math.min(notes.length - 1, level)];
    this.blip(note, 0.09, 'sine', 0.032);
    setTimeout(() => this.blip(note * 1.5, 0.1, 'sine', 0.022), 38);
  }

  poseResult(kind) {
    if (!this.ensure()) return;
    const chords = kind === 'perfect'
      ? [523.25, 659.25, 783.99, 1046.5]
      : kind === 'great'
        ? [523.25, 659.25, 783.99]
        : [523.25, 659.25];
    chords.forEach((freq, i) => {
      setTimeout(() => this.blip(freq, 0.22, 'triangle', 0.045), i * 52);
    });
  }

  hit() {
    if (!this.ensure()) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(180, t);
    osc.frequency.exponentialRampToValueAtTime(48, t + 0.24);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.11, t);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.3);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.value = 900;
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    osc.start(t);
    osc.stop(t + 0.32);

    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const ng = this.ctx.createGain();
    ng.gain.setValueAtTime(0.06, t);
    ng.gain.exponentialRampToValueAtTime(0.0001, t + 0.18);
    const hp = this.ctx.createBiquadFilter();
    hp.type = 'highpass';
    hp.frequency.value = 500;
    src.connect(hp);
    hp.connect(ng);
    ng.connect(this.master);
    src.start(t);
    src.stop(t + 0.2);
  }

  powerUp() {
    if (!this.ensure()) return;
    const t = this.ctx.currentTime;
    const osc = this.ctx.createOscillator();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(220, t);
    osc.frequency.exponentialRampToValueAtTime(1760, t + 0.6);
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(500, t);
    filter.frequency.exponentialRampToValueAtTime(5000, t + 0.5);
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(0.06, t + 0.08);
    gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.72);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.master);
    gain.connect(this.reverb);
    osc.start(t);
    osc.stop(t + 0.75);
  }

  // ---------------- MUSIC ----------------

  startMusic() {
    if (!this.ensure()) return;
    if (this.musicPlaying) this.stopMusic(0.2);
    this.musicPlaying = true;
    this.step = 0;
    this.bar = 0;
    this.nextStepTime = this.ctx.currentTime + 0.08;
    this.startTime = this.nextStepTime;
    this.musicBus.gain.cancelScheduledValues(this.ctx.currentTime);
    this.musicBus.gain.setValueAtTime(0.52, this.ctx.currentTime);
    this.timer = setInterval(() => this.scheduler(), 25);
    this.scheduler();
  }

  stopMusic(fade = 0.6) {
    if (!this.ctx) return;
    this.musicPlaying = false;
    if (this.timer) clearInterval(this.timer);
    this.timer = null;
    const now = this.ctx.currentTime;
    this.musicBus.gain.cancelScheduledValues(now);
    this.musicBus.gain.setValueAtTime(this.musicBus.gain.value, now);
    this.musicBus.gain.linearRampToValueAtTime(0.0001, now + fade);
  }

  duck(active) {
    if (!this.ctx) return;
    const now = this.ctx.currentTime;
    this.musicBus.gain.cancelScheduledValues(now);
    this.musicBus.gain.linearRampToValueAtTime(active ? 0.17 : 0.52, now + 0.25);
  }

  scheduler() {
    if (!this.musicPlaying || this.ctx.state !== 'running') return;
    while (this.nextStepTime < this.ctx.currentTime + 0.14) {
      this.scheduleStep(this.step, this.nextStepTime);
      this.nextStepTime += STEP;
      this.step++;
      if (this.step % 64 === 0) this.bar++;
    }
  }

  scheduleStep(step, time) {
    const s = step % 16;
    const bar = Math.floor(step / 16) % 4;
    const bus = this.musicBus;

    // four-on-the-floor with a last-beat lift
    if (s === 0 || s === 4 || s === 8 || s === 12 || s === 14) {
      this.kick(time, s === 14 ? 0.34 : 0.47);
    }
    if (s === 4 || s === 12) this.snare(time, 0.18);
    if (s % 2 === 0) this.hat(time, s % 4 === 0 ? 0.045 : 0.028, 0.04);
    if (s === 2 || s === 6 || s === 10 || s === 14) this.hat(time, 0.034, 0.11, true);

    const roots = [47, 43, 50, 45]; // B2, G2, D3, A2
    const chords = [
      [59, 62, 66], // Bm
      [55, 59, 62], // G
      [62, 66, 69], // D
      [57, 61, 64], // A
    ];
    const root = roots[bar];
    const chord = chords[bar];

    // pulsing eight-note bass
    if (s % 2 === 0) {
      const octave = s === 6 || s === 14 ? 12 : 0;
      this.bass(time, midiToHz(root + octave), 0.24, 0.075);
    }

    // offbeat chord stabs
    if (s === 2 || s === 6 || s === 10 || s === 14) {
      for (const n of chord) this.pluck(time, midiToHz(n), 0.18, 0.014, 'triangle');
    }

    // airy pad once per bar
    if (s === 0) {
      for (const n of chord) this.pad(time, midiToHz(n + 12), STEP * 15.8, 0.019);
    }

    // sparkly arpeggio in the second half
    const arp = [0, 1, 2, 1, 2, 0, 1, 2];
    if (s % 2 === 0 && s >= 4) {
      const note = chord[arp[(s / 2 - 2) % arp.length]] + 12;
      this.pluck(time, midiToHz(note), 0.12, 0.012, 'sine');
    }

    // a simple sparkling top line every other bar
    const melody = [
      [0, 78], [3, 81], [6, 83], [10, 81], [12, 78],
    ];
    if (bar % 2 === 0) {
      const hit = melody.find(([st]) => st === s);
      if (hit) this.pluck(time, midiToHz(hit[1]), 0.3, 0.018, 'triangle');
    }
  }

  kick(time, volume) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(155, time);
    osc.frequency.exponentialRampToValueAtTime(41, time + 0.16);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(volume, time + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.3);
    osc.connect(gain);
    gain.connect(this.musicBus);
    osc.start(time);
    osc.stop(time + 0.32);
  }

  snare(time, volume) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'bandpass';
    filter.frequency.value = 1700;
    filter.Q.value = 0.7;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + 0.16);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicBus);
    gain.connect(this.reverb);
    src.start(time);
    src.stop(time + 0.18);
  }

  hat(time, volume, duration, open = false) {
    const src = this.ctx.createBufferSource();
    src.buffer = this.noise;
    const filter = this.ctx.createBiquadFilter();
    filter.type = 'highpass';
    filter.frequency.value = 6800;
    const gain = this.ctx.createGain();
    gain.gain.setValueAtTime(volume, time);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    src.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicBus);
    src.start(time);
    src.stop(time + duration + 0.02);
  }

  bass(time, freq, duration, volume) {
    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(freq, time);
    filter.type = 'lowpass';
    filter.Q.value = 5;
    filter.frequency.setValueAtTime(380, time);
    filter.frequency.exponentialRampToValueAtTime(165, time + duration);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(volume, time + 0.015);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.musicBus);
    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  pluck(time, freq, duration, volume, type) {
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, time);
    gain.gain.setValueAtTime(0.0001, time);
    gain.gain.exponentialRampToValueAtTime(volume, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.0001, time + duration);
    osc.connect(gain);
    gain.connect(this.musicBus);
    gain.connect(this.reverb);
    osc.start(time);
    osc.stop(time + duration + 0.02);
  }

  pad(time, freq, duration, volume) {
    for (const detune of [-7, 0, 7]) {
      const osc = this.ctx.createOscillator();
      const filter = this.ctx.createBiquadFilter();
      const gain = this.ctx.createGain();
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(freq, time);
      osc.detune.value = detune;
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(750, time);
      filter.frequency.linearRampToValueAtTime(1350, time + duration * 0.5);
      filter.frequency.linearRampToValueAtTime(620, time + duration);
      gain.gain.setValueAtTime(0.0001, time);
      gain.gain.linearRampToValueAtTime(volume, time + 0.28);
      gain.gain.linearRampToValueAtTime(0.0001, time + duration);
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(this.musicBus);
      gain.connect(this.reverb);
      osc.start(time);
      osc.stop(time + duration + 0.05);
    }
  }
}
