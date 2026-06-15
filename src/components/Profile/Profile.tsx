


function Profile() {
  return (
    <div className="profile absolute top-1/6 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center z-10">
      <section className="flex max-w-3xl flex-col items-center gap-5 text-center">
        <p className="rounded-full border border-white/15 bg-white/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.35em] text-white/75 backdrop-blur-sm">
          Professional Portfolio
        </p>
        <h1 className="text-[clamp(4rem,12vw,8rem)] font-extrabold text-white/80 leading-none tracking-tight drop-shadow-[0_10px_40px_rgba(0,0,0,0.24)]">
          Gbot Prod
        </h1>
      </section>
    </div>
  )
}

export default Profile;