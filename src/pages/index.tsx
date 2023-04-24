import { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import IconImage from '../../public/images/icon.jpg';
import LightBulbSvg from '../../public/images/svgs/miscellaneous_icons_1.svg';
import { AnimatedText } from 'components/AnimatedText';
import { HireMe } from 'components/HireMe';
import { LinkArrow } from 'components/Icons';
import { Layout } from 'components/Layout';
import { TransitionEffect } from 'components/TransitionEffect';

type HomeProps = object;

const Home: NextPage<HomeProps> = () => {
  return (
    <>
      <Head>
        <title>Joji.Iba Portfolio with Next.js</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <TransitionEffect />
      <main className="flex items-center text-dark w-full min-h-screen dark:text-light 2xl">
        <Layout className="pt-0 md:pt-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col">
            <div className="w-1/2 md:w-full p-8">
              <Image
                src={IconImage}
                alt="Joji.Iba"
                className="w-full h-auto lg:hidden md:inline-block md:w-full"
                priority
                sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="Try&Error! 挑戦することで、 自分を超える。"
                className="!text-6xl !text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:!text-xs">
                プログラミングをこよなく愛し、モダンな技術習得に向け日夜技術研磨に励んでいるフロントエンドエンジニアです。
                React/Next.js、TypeScriptを中心に学んでいます。
                <br />
                革新的なアイデアと共に、ユーザーにとって「面白い」「使いやすい」「ハイパフォーマンス」なWebアプリケーション開発に専念致します。
                <br />
                これまで携わったプロジェクトや個人開発の作品集をご覧下さい！
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center">
                <Link
                  href="/dummy.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold border-2 border-solid border-transparent capitalize hover:bg-light hover:text-dark hover:bg-transparent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark  hover:dark:text-light hover:dark:border-light sm:!p-2 sm:!px-4 sm:!text-base"
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="/contact"
                  // target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24 md:hidden">
          <Image src={LightBulbSvg} alt="Joji Iba" className="w-full h-auto" />
        </div>
      </main>
    </>
  );
};

export default Home;
