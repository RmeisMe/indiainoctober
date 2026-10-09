// Web Audio API synthesized sound effects for high-impact tactile brutalist feedback
class AudioManager {
  private ctx: AudioContext | null = null;
  public enabled: boolean = true;

  private getContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  // Brutal, heavy rubber-stamp slam sound (low mechanical thud + crisp impact)
  playStamp() {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const t = ctx.currentTime;

      // Heavy low-end impact (sine drop)
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(140, t);
      osc.frequency.exponentialRampToValueAtTime(32, t + 0.18);

      gain.gain.setValueAtTime(0.7, t);
      gain.gain.exponentialRampToValueAtTime(0.01, t + 0.22);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.25);

      // Noise burst for mechanical stamp slap
      const bufferSize = ctx.sampleRate * 0.08;
      const buffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
      const data = buffer.getChannelData(0);
      for (let i = 0; i < bufferSize; i++) {
        data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.2));
      }

      const noise = ctx.createBufferSource();
      noise.buffer = buffer;
      const noiseGain = ctx.createGain();
      noiseGain.gain.setValueAtTime(0.4, t);
      noiseGain.gain.exponentialRampToValueAtTime(0.01, t + 0.09);

      noise.connect(noiseGain);
      noiseGain.connect(ctx.destination);

      noise.start(t);
      noise.stop(t + 0.1);
    } catch {
      // Audio autoplay policy or device fallback
    }
  }

  // Crisp subtle slide navigation click
  playClick() {
    if (!this.enabled) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;
      const t = ctx.currentTime;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(520, t);
      osc.frequency.exponentialRampToValueAtTime(260, t + 0.04);

      gain.gain.setValueAtTime(0.15, t);
      gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start(t);
      osc.stop(t + 0.05);
    } catch {
      // Fail silently
    }
  }
}

export const audio = new AudioManager();
