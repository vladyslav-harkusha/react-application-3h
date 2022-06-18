import cl from './MyModal.module.css';

export const MyModal = ({children, visible, setVisible}) => {
  const rootClasses = [cl.myModal];

  if (visible) {
    rootClasses.push(cl.active)
  }

  return (
    <div className={rootClasses.join(' ')} onClick={() => setVisible(false)}>
      <div className={cl.myModalContent} onClick={(event) => event.stopPropagation()}>
        {children}
      </div>
    </div>
  )
}
