const reactionEmoji = {
  thumbsUp: '👍',
  wow: '😮',
  heart: '❤️',
}

const ReactionsButton = () => {
  const reactionButtons = Object.entries(reactionEmoji).map(([name, emoji]) => {
    return (
      <button key={name} type="button" className="reactionButton">
        {emoji}
      </button>
    )
  })

  return <div>{reactionButtons}</div>
}

export default ReactionsButton
