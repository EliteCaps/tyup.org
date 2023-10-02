interface IFeature {
  leadingIcon?: string
  title: string
  body: string
  trailingIcon?: string
}

interface IFeatureProps {
  name: string
  title: string
  subtitle: string
  features: IFeature[]
  path: string
}

const FEATURES: IFeatureProps[] = [
  {
    name: 'mate',
    path: '/mate',
    title: 'Crafting Your End-to-End College Experience for Success',
    subtitle: `At Tyup Mate, we're not just revolutionizing placements, we're transforming your entire college experience. Join us, and together, we'll pave the way to your future success.`,
    features: [
      {
        leadingIcon: 'approval',
        title: 'Shortlisting Chances',
        body: `Increase the Possibility of Getting Shortlisted for Company's Assessments and Interviews with Tyup.`
      },
      {
        leadingIcon: 'check',
        title: 'Auto Apply to Jobs',
        body: 'Predict Future Success: Harnessing Past Recruitment Insights for On-Campus Placements.'
      }
    ]
  },
  {
    name: 'campus',
    path: '/campus',
    title: 'Your End-to-End Solution for Campus Success',
    subtitle:
      'Unlock the Power of Seamless College-Company Connections, Streamlined Verification, and Unmatched Success. Tyup offers a unique blend of features and benefits for colleges. Explore Now!!',
    features: [
      {
        leadingIcon: 'approval',
        title: 'Call Companies in 1 Click ',
        body: 'With a single click, college can engage with HR and companies, showcase their strengths & offerings.'
      },
      {
        leadingIcon: 'check',
        title: 'Easy Data Management',
        body: 'Keep your college and student data organized and easily accessible, saving time and effort.'
      }
    ]
  },
  {
    name: 'recruit',
    path: '/recruit',
    title: 'Your End-to-End Automated Platform for Better, Faster Hiring',
    subtitle:
      'Revolutionize your hiring process with speed and precision. Our end-to-end automation delivers top talent for your organization effortlessly.',
    features: [
      {
        leadingIcon: 'approval',
        title: 'Data Future Prediction',
        body: 'Data-Driven Approach for Harnessing Past Recruitment Insights for Your Next On-Campus Recruitment'
      },
      {
        leadingIcon: 'check',
        title: 'Custom Job Campaigns',
        body: 'Accelerating Job Campaigns with Custom Templates Eliminating Repetitive Manual Creation.'
      }
    ]
  }
]

export { type IFeatureProps, type IFeature, FEATURES as default }
