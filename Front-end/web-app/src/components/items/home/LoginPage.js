import React from 'react';
import { useSpring, animated } from 'react-spring';

function LoginPage() {
  const fadeAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 500 },
  });

  return (
    <div className="flex justify-center items-center h-screen">
      <animated.h1
        className="text-3xl text-center mt-8 mb-4"
        style={fadeAnimation}
      >
        Animated Text
      </animated.h1>
    </div>
  );
}

export default LoginPage;

// import React from 'react';

// function LoginPage() {
//   return (
//     <div>
//       <h1>login page</h1>
      
//     </div>
//   );
// }

// export default LoginPage;


