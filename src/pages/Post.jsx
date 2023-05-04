export default function Post({ title, description, postDate, author }) {
  return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{postDate}</p>
      <p>{author}</p>
    </div>
  )
}
