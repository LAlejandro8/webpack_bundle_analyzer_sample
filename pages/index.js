import Link from 'next/link'
import faker from 'faker'
import _ from 'lodash';

const Index = ({ name }) => {
  // Given object
  const ob1 = { somevar: "Javascript Rocks!" };
  // Use of _.has method 
  console.log(_.has(ob1, "somevar"));
  console.log(_.has(ob1, 'a'));

  // Return an awesome front-end website :)
  return (
    <div>
      <h1>Heavy Homepage</h1>
      <p>Welcome, {name}. Imagine this is a really cool front-end website.</p>
      <div>
        <Link href="/about">
          About Page
        </Link>
      </div>
      <br />
      <div>
        <Link href="/contact">
          Contact
        </Link>
      </div>
    </div>
  )
}

export default Index

export async function getStaticProps() {
  // The name will be generated at build time only
  const name = faker.name.findName()

  // Return data props
  return {
    props: { name },
  }
}
