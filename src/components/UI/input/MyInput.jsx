import classes from './MyInput.module.css';

export const MyInput = (props) => {
  return (
    <input {...props} className={classes.myInp} />
  );
};
