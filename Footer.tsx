import { personal } from '../data/profile'

export default function Footer() {
  return (
    <footer className="bg-green-deep text-green-soft on-green">
      <div className="max-w-content mx-auto px-5 sm:px-8 py-6 flex flex-wrap justify-between gap-3 text-[0.85rem]">
        <p>
          © {new Date().getFullYear()} {personal.name}
        </p>
        <a href="#top" className="hover:text-paper">
          Back to top
        </a>
      </div>
    </footer>
  )
}
