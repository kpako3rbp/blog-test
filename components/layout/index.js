import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Layout = (props) => {
  const { children, home } = props;
  const name = 'Hans';

  return (
    <div className="container">
      <header className="header">
        {home ? (
          <>
            <Image src="/images/profile.jpeg" className="borderCircle" height={144} width={144} alt={name} />
            <h1 className="heading2xl">{name}</h1>
          </>
        ) : (
          <>
            <Link href="/">
              <Image src="/images/profile.jpeg" className="borderCircle" height={144} width={144} alt={name} />
            </Link>
            <h2 className="headingLg">
              <Link href="/">{name}</Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className="backHome">
          <Link href="/">Вернуться на главную</Link>
        </div>
      )}
    </div>
  );
};

export default Layout;
