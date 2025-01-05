import Container from './Container'

function NewSection() {
  return (
    <div className="bg-[appropriate-color]">
      <Container>
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-3">Section Title</h2>
          <p className="text-gray-600 text-lg">Section subtitle</p>
        </div>
        {/* Section content */}
      </Container>
    </div>
  )
} 