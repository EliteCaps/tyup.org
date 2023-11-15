interface IFeatureProps {
    span: string,
    title: string
    subtitle: string
  }
  
  const FEATURES: IFeatureProps[] = [
    {
      span: 'Market Strategy',
      title: `Showcase campus talent-pool`,
      subtitle:
        'Tyup helps colleges showcase their talent pool to companies. This helps companies to understand the strengths of the campus and the students.'
    },
    {
      span: 'Effortless Employer Engagement',
      title: 'Contact with Companies in 1-Click',
      subtitle: `Tyup simplifies the process for colleges to engage with HR and companies. With a single click, universities can efficiently showcase their strengths and offerings to prospective employers.`
    }
  ]
  
  export { type IFeatureProps,  FEATURES as default }
  