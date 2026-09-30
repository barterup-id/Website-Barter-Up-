'use client';

export default function HowWeRollSection() {
  const steps = [
    {
      num: 1,
      circleBorder: 'border-blue-500 text-blue-600',
      title: 'Networking & Learning',
      desc: 'Datang untuk tambah relasi baru sambil belajar topik dari expert speaker. We encourage you to bring your business card and business samples!',
    },
    {
      num: 2,
      circleBorder: 'border-blue-500 text-blue-600',
      title: 'Barter Your Expertise',
      desc: 'Gunakan waktu networking untuk sekaligus belajar dari sesama peserta. Jangan lupa untuk "barter" skill kamu juga ya!',
    },
    {
      num: 3,
      circleBorder: 'border-amber-400 text-amber-600',
      title: 'Join Community',
      desc: 'Gabung grup WhatsApp community Barter Up! untuk tambah relasi, share insight, dan saling bantu sesama member',
    },
    {
      num: 4,
      circleBorder: 'border-emerald-500 text-emerald-600',
      title: 'You Can Help Too!',
      desc: "We receive requests from our members too! Whether it's a topic you want to learn or a new way of learning, our ears are open!",
    },
  ];

  return (
    <section id="how-we-roll" className="py-14 md:py-24 bg-[#F8FAFC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="text-xs sm:text-sm font-bold text-[#3B72EA] tracking-widest uppercase mb-2">
            HOW WE ROLL
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[2.75rem] font-extrabold text-[#0B2559] tracking-tight">
            How to Optimize Your Barter Up! Experience
          </h2>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-3xl p-7 border border-slate-200/80 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div
                  className={`w-10 h-10 rounded-full border-2 ${step.circleBorder} flex items-center justify-center font-bold text-sm mb-6 bg-white shadow-2xs`}
                >
                  {step.num}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 tracking-tight mb-3">
                  {step.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed font-normal">
                  {step.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
