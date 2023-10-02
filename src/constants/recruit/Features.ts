interface IFeature {
  leadingIcon?: string
  title: string
  body: string
  trailingIcon?: string
}

interface IFeatureProps {
  title: string
  subtitle: string
  features: IFeature[]
}

const FEATURES: IFeatureProps[] = [
  {
    title: 'Effortless Hiring with Automated Solutions',
    subtitle: `Monitor the entire on-campus placement journey, from shortlisting and evaluations to interviews. Experience enhanced efficiency in your hiring process with the help of automation.`,
    features: [
      {
        leadingIcon: 'approval',
        title: 'Track Candidates',
        body: `Enhance Your Recruitment Strategy with Advanced Candidate Tracking and Analytics`
      },
      {
        leadingIcon: 'stocks',
        title: 'Data-driven approach',
        body: 'Predict Future Success: Harnessing Past Recruitment Insights for On-Campus Placements'
      }
    ]
  },
  {
    title: `Save Organization's Time and Resources`,
    subtitle:
      'Unlock efficiency and resource optimization for your organization. Tyup streamlines processes, saving valuable time and resources while maximizing results.',
    features: [
      {
        leadingIcon: 'approval',
        title: 'Detailed College Profile',
        body: 'Streamlining College Information for Recruiters with In-Depth, Data-Driven Reports.'
      },
      {
        leadingIcon: 'stocks',
        title: 'Custom Job Campaigns',
        body: 'Accelerating Job Campaigns with Custom Templates Eliminating Repetitive Manual Creation.'
      }
    ]
  }
]

export { type IFeatureProps, type IFeature, FEATURES as default }
