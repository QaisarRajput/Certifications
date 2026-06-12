export type Vendor = {
  name: string
  logo: string
  description: string
}

export const vendors: Vendor[] = [
  {
    name: 'Anthropic',
    logo: '/vendors/anthropic.png',
    description: 'AI research and foundation models'
  },
  {
    name: 'Dataiku',
    logo: '/vendors/dataiku.png',
    description: 'Enterprise AI and ML platform'
  },
  {
    name: 'IBM',
    logo: '/vendors/ibm.png',
    description: 'Cloud and enterprise AI solutions'
  },
  {
    name: 'Google',
    logo: '/vendors/google.png',
    description: 'Google Cloud and AI ecosystem'
  },
  {
    name: 'AWS',
    logo: '/vendors/aws.png',
    description: 'Amazon Web Services cloud platform'
  }
]