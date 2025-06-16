export default function Header() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/sumali-junuthula/",
      src: "",
      alt: "LinkedIn"
    },
    {
      href: "mailto:sumali.junuthula@gmail.com",
      src: "",
      alt: "Email"
    },
    {
      href: "https://github.com/sumali-junuthula",
      src: "../assets/icons/github-icon.png",
      alt: "GitHub"
    },
    {
      href: "",
      src: "../assets/icons/insta-icon.png",
      alt: "Instagram"
    }
  ]

  return (
    <header className="fixed top-0 left-0 w-full z-50 p-4 bg-darkblue">
      <div className="flex flex-col inline-block">
        <h2 className="text-beige font-spacemono text-50px md:text-xl tracking-wider">
          <a href="#top" className="hover:text-blue transition">sumali junuthula</a>
        </h2>
        <div className="flex justify-center gap-3 mt-1">
          {icons.map((icon, idx) => (
            <div key={idx} className="relative w-5 h-5">
              <a href={icon.href} target="_blank" rel="noopener noreferrer">
                <img
                  src={icon.src}
                  alt={icon.alt}
                  className="w-5 h-5 object-cover rounded transition duration-150 ease-in-out"
                />
                <button className="absolute inset-0 opacity-0 hover:cursor-pointer" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </header>
  )
}
