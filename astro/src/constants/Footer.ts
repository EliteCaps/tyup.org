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
  address: 'Bhubaneswar, Odisha, India',
  phone: '+91 0000000000',
  email: 'tyup.official@gmail.com'
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
      'Showcase your talent pool and reach out to companies with ease to enhance your campus placements.'
  },
  {
    name: 'recruit',
    path: '/recruit',
    description:
      'Make data-driven decisions and optimize your recruitment process with speed and precision.'
  }
]

export {
  COMPANY,
  FOOTER as default,
  type IFooter,
  type ICompany,
  type ISocialLinks
}
