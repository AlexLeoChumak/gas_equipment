import { withFork } from 'effector-next'
import Document from 'next/document'

const enhance = withFork({ debug: false })
export default enhance(Document)

// import { withFork } from 'effector-next'
// import Document from 'next/document'

// const enhance = withFork({ debug: false })
// const ForkedDocument = withFork()(Document)
// export default enhance(ForkedDocument)
