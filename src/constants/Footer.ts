interface ISocialLinks {
  linkedin: string
  github: string
  twitter: string
  instagram: string
}

interface IFooter {
  name: string
  path: string
  description: string
}

interface ICompany {
  tncTitle: string
  tncLink: string
  privacyTitle: string
  privacyLink: string
  address?: string
  phone?: string
  email?: string
  socialLinks?: ISocialLinks
}

const COMPANY: ICompany = {
  tncTitle: 'Terms of use',
  tncLink: '/terms-and-conditions',
  privacyTitle: 'Privacy Policy',
  privacyLink: '/privacy-policy',
  address: '1234 North Main Street New York, NY 22222',
  phone: '+1 (555) 555-5555',
  email: 'hi@tyup.org'
}

const FOOTER: IFooter[] = [
  {
    name: '',
    path: '/',
    description: 'All in one platform for students, colleges and compaines.'
  },
  {
    name: 'mate',
    path: '/mate',
    description:
      'Transforming your college experience and forging the way for your future success.'
  },
  {
    name: 'campus',
    path: '/campus',
    description:
      'Revolutionize your hiring process with speed and precision. Our end-to-end automation delivers top talent for your organization effortlessly.'
  },
  {
    name: 'recruit',
    path: '/recruit',
    description:
      'Revolutionize your hiring process with speed and precision. Our end-to-end automation delivers top talent for your organization effortlessly.'
  }
]

export {
  COMPANY,
  FOOTER as default,
  type IFooter,
  type ICompany,
  type ISocialLinks
}
