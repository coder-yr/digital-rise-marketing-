import Link from 'next/link'
import { ChevronRight, Home } from 'lucide-react'

interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav aria-label="Breadcrumb" className="flex mb-8">
      <ol className="flex items-center space-x-2 text-sm text-dr-text/40">
        <li>
          <Link href="/" className="hover:text-dr-gold transition-colors flex items-center">
            <Home size={14} className="mr-1" /> Home
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index} className="flex items-center space-x-2">
            <ChevronRight size={14} />
            {item.href ? (
              <Link href={item.href} className="hover:text-dr-gold transition-colors capitalize">
                {item.label}
              </Link>
            ) : (
              <span className="text-dr-gold font-medium capitalize" aria-current="page">
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
