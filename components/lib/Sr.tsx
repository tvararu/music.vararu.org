const Sr = ({ children }) => (
  <>
    <style jsx>{`
      span {
        border: 0;
        clip: rect(0 0 0 0);
        height: 1px;
        margin: -1px;
        overflow: hidden;
        padding: 0;
        position: absolute;
        width: 1px;
      }
    `}</style>
    <span>{children}</span>
  </>
);

export default Sr;
