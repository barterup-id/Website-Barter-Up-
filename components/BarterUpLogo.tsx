'use client';

export default function BarterUpLogo({className = '', size = 'md'}: {className?: string; size?: 'sm' | 'md' | 'lg'}) {
  const sizeClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  return (
    <div className={`inline-flex items-center gap-1 font-black select-none tracking-tight ${sizeClasses[size]} ${className}`}>
      <span className="text-[#EAB308] drop-shadow-[0_1.5px_1px_rgba(180,83,9,0.35)]">
        BARTER
      </span>
      <span className="text-[#CA8A04] drop-shadow-[0_1.5px_1px_rgba(180,83,9,0.35)]">
        UP!
      </span>
      <span className="inline-block text-amber-500 animate-pulse text-xs -translate-y-1.5 ml-0.5">
        ✦
      </span>
    </div>
  );
}
