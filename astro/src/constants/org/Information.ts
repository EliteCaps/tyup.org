interface Info {
  icon: string
  title: string
  body: string
  path: string
  buttonText?: string
}

const INFOs: Info[] = [
  {
    icon: 'Union',
    title: 'Your Privacy is Our Priority',
    body: `In our partnership, trust is our cornerstone. We don't own or trade your data, and we certainly don't rely on ad-driven models. Our sole revenue source is the software licensing fees you provide.`,
    path: '/privacy-policy',
    buttonText: 'Read More'
  },
  {
    icon: 'Union',
    title: 'Have a Feature in Mind?',
    body: `Have a feature in mind? We're here to listen! At Tyup, we value your input. Share your ideas or requests with us, and together, we can make Tyup even better, tailored to your needs.`,
    path: '/request-feature',
    buttonText: 'Pitch in'
  }
]

export { INFOs as default, type Info }
