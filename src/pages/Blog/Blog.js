import useDynamicTitle from '../../hooks/useDynamicTitle';

const Blog = () => {
  useDynamicTitle('Pixel -Blog');
  const blogQuestion = [
    {
      id: 1,
      question: 'Difference between SQL and NoSQL?',
      ans: 'SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.',
    },
    {
      id: 2,
      question: 'What is JWT, and how does it work?',
      ans: 'JSON Web Token (JWT) is an open standard (RFC 7519) that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. This information can be verified and trusted because it is digitally signed.',
    },
    {
      id: 3,
      question: 'What is the difference between javascript and NodeJS?',
      ans: 'JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.',
    },
    {
      id: 4,
      question: 'How does NodeJS handle multiple requests at the same time?',
      ans: 'How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.',
    },
  ];

  return (
    <div className='container mx-auto px-2 my-12'>
      <div className='max-w-2xl mx-auto'>
        {blogQuestion.map((blog) => (
          <div key={blog.id} className='bg-neutral mb-6 p-6 rounded-2xl'>
            <h2 className='text-xl font-bold mb-2'>{blog.question}</h2>
            <p>{blog.ans}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Blog;
