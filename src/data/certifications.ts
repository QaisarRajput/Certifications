export type Certification = {
  id: string
  title: string
  vendor: string
  field: string
  industry: string[]
  tags: string[]
  issueDate: string
  expiryDate: string | null
  credentialId: string
  verificationUrl: string
  image: string
  featured?: boolean
}

export const certifications: Certification[] = [
  {
    id: "anthropic-prompt-engineering-1",
    title: "Prompt Engineering Fundamentals",
    vendor: "Anthropic",
    field: "Artificial Intelligence",
    industry: ["Technology"],
    tags: ["LLM", "Prompt Engineering", "GenAI"],
    issueDate: "2025-06-01",
    expiryDate: null,
    credentialId: "ANTH-001",
    verificationUrl: "https://example.com/verify/anthropic-1",
    image: "/certifications/anthropic/prompt1.png",
    featured: true
  },
  {
    id: "anthropic-advanced-llm",
    title: "Advanced LLM Systems",
    vendor: "Anthropic",
    field: "Artificial Intelligence",
    industry: ["Technology"],
    tags: ["LLM", "Agents", "RAG"],
    issueDate: "2025-07-15",
    expiryDate: null,
    credentialId: "ANTH-002",
    verificationUrl: "https://example.com/verify/anthropic-2",
    image: "/certifications/anthropic/prompt2.png",
    featured: true
  },
  {
    id: "dataiku-ml-core",
    title: "Dataiku ML Practitioner",
    vendor: "Dataiku",
    field: "Machine Learning",
    industry: ["Technology", "Enterprise"],
    tags: ["ML", "AutoML", "MLOps"],
    issueDate: "2024-11-10",
    expiryDate: null,
    credentialId: "DKU-101",
    verificationUrl: "https://example.com/verify/dataiku-1",
    image: "/certifications/dataiku/ml.png",
    featured: true
  },
  {
    id: "google-ml-engineering",
    title: "Google Cloud ML Engineering",
    vendor: "Google",
    field: "Cloud AI",
    industry: ["Technology"],
    tags: ["GCP", "ML", "Deployment"],
    issueDate: "2024-08-20",
    expiryDate: null,
    credentialId: "GCP-ML-77",
    verificationUrl: "https://example.com/verify/google-1",
    image: "/certifications/google/ml.png",
    featured: false
  },
  {
    id: "aws-ml-specialty",
    title: "AWS Machine Learning Specialty",
    vendor: "AWS",
    field: "Cloud AI",
    industry: ["Technology"],
    tags: ["AWS", "SageMaker", "ML"],
    issueDate: "2024-05-12",
    expiryDate: null,
    credentialId: "AWS-MLS-55",
    verificationUrl: "https://example.com/verify/aws-1",
    image: "certifications/aws/ml.png",
    featured: false
  }
]}