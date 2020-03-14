// import React, { FC, useEffect, useRef, useState } from 'react';

// import { LoremIpsum, Paragraph, Tooltip, XcoreProvider } from '../../src';

// export default { title: 'Tooltip' };

// export const BasicUsage: FC = () => {
//   const ref = useRef<HTMLElement>(null!);

//   const [_, forceUpdate] = useState(0);

//   useEffect(() => {
//     forceUpdate(1);
//   }, []);

//   return (
//     <XcoreProvider>
//       <Paragraph>
//         <LoremIpsum units="paragraphs" />
//         <LoremIpsum ref={ref} units="sentences" />
//         <Tooltip target={ref}>Tooltip!</Tooltip>
//         <LoremIpsum units="paragraphs" />
//       </Paragraph>
//     </XcoreProvider>
//   );
// };
