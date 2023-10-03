interface IFeatureProps {
    span: string,
    title: string
    subtitle: string
  }
  
  const FEATURES: IFeatureProps[] = [
    {
        span: 'Effortless Employer Engagement',
      title: 'Contact with Companies in One Click',
      subtitle: `Tyup simplifies the process for colleges to engage with HR and companies. With a single click, universities can efficiently showcase their strengths and offerings to prospective employers.`
    },
    {
        span: 'Automated Offer Letter Access',
      title: `Seamless Job Offer Letter Access`,
      subtitle:
        'Tyup simplifies job offer letter acquisition for colleges. Monitor student achievements effortlessly as job offer letters are directly accessible, eliminating the need for individual requests.'
    }
  ]
  
  export { type IFeatureProps,  FEATURES as default }
  