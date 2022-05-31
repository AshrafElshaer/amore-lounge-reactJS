
const SocialMediaLink = ({ link , className , text }) => {
  return (
    <a href={link} className={className} target='_blank' rel="noreferrer noopener">
      {text}
    </a>
  )
}

export default SocialMediaLink