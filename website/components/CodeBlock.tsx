import React, { FC } from 'react';
import Highlight, { defaultProps } from 'prism-react-renderer';
import vsDark from 'prism-react-renderer/themes/vsDark';

export const CodeBlock: FC = ({ children }) => {
  const theme = {
    ...vsDark,
    plain: {
      ...vsDark.plain,
      color: 'white'
    }
  };
  return (
    <Highlight {...defaultProps} theme={theme} code={children as any} language="tsx">
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <pre className={className} style={{ ...style, padding: '20px', borderRadius: '.3rem', width: '100%', fontFamily: ' Menlo, Monaco, "Courier New", monospace', fontSize: '1.4rem' }}>
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) =>
                <span key={key} {...getTokenProps({ token, key })} />
              )}
            </div>
          ))}
        </pre>
      )}
    </Highlight>
  );
};
