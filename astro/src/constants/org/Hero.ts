interface ICard {
  href: string
  leadingIcon: string
  trailingIcon: string
  title: string
  body: string
}

const MOBILE_SUBTITLE: string = `Elevating College Placement Success through Seamless Connections, Precision Hiring, and a Transformative Student Experience.`

const DESKTOP_SUBTITLE: string = `Elevating College Placement Success through Seamless Connections, Precision Hiring, and a Transformative Student Experience, Paving the Way for Your Future with End-to-End Automation. Experience the Power of Precision and Success in One Platform. Check out all three platforms!!`

const TWEET: string = `Tyup is one of the best products I've ever used for my company. Went
from 0-100 on logging in 10 minutes. Incredible`

const cards: ICard[] = [
  {
    leadingIcon: 'approval',
    trailingIcon: 'chevron-left',
    title: 'Tyup Mate',
    body: `Transforming students' college experience and forging the way for their future success.`,
    href: '/mate'
  },
  {
    leadingIcon: 'chart',
    trailingIcon: 'chevron-left',
    title: 'Tyup Campus',
    body: `Unlock the Power of Seamless College-Company Connections, Streamlined Verification, and Unmatched Success.`,
    href: '/campus'
  },
  {
    leadingIcon: 'chart',
    trailingIcon: 'chevron-left',
    title: 'Tyup Recruit',
    body: `Revolutionize your hiring process with speed and precision. Our end-to-end automation delivers top talent for you.`,
    href: '/recruit'
  }
]

export {
  cards as default,
  type ICard,
  MOBILE_SUBTITLE,
  DESKTOP_SUBTITLE,
  TWEET
}
