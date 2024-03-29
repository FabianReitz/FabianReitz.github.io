export const Hero = () => {
  return (
    <section id='about-me' className='flex'>
      <div className='mx-auto flex'>
        <div className='w-5/12 my-auto'>
          <h1 className='text-6xl font-bold text-center text-white'>
            Hi, I'm <span className='text-[#e91e62]'>Fabian</span>!
          </h1>
          <p className='pt-10 text-2xl text-center text-white leading-relaxed mx-7'>
            I'm a{' '}
            <span className='text-[#e91e62] text-3xl'>
              Fullstack Web Developer
            </span>{' '}
            transforming visions into streamlined digital experiences. Let's
            create something exciting together!
          </p>
        </div>
        <div className='w-auto mx-auto mt-16'>
          <div className='size-fit rounded-3xl border border-cyan-500 rotate-6'>
            <div className='size-fit rounded-3xl border border-cyan-500 rotate-6'>
              <div className='size-fit rounded-3xl border border-cyan-500 rotate-6'>
                <img
                  className='rotate-[-18deg] h-[500px]'
                  src='src/assets/img/me.png'
                  alt='Fabian portrait'
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
