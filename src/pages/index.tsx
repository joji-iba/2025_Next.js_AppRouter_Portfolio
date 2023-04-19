import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import IconImage from '../../public/images/icon.jpg'
import SkillsImage from '../../public/images/pc.jpg'
import LightBulbSvg from '../../public/images/svgs/miscellaneous_icons_1.svg'
import { AnimatedText } from 'components/AnimatedText'
import { HireMe } from 'components/HireMe'
import { LinkArrow } from 'components/Icons'
import { Layout } from 'components/Layout'

export default function Home() {
  return (
    <>
      <Head>
        <title>Joji.Iba Portfolio with Next.js</title>
        <meta name="description" content="Generated by create next app" />
      </Head>

      {/* <header className="border-b border-gray-200 text-gray-700">
        <div className="container mx-auto flex flex-col items-center p-5 md:flex-row">
          <a href="#" className="mb-4 font-medium text-gray-900 md:mb-0">
            <span className="ml-3 text-xl">Joji Iba</span>
          </a>
          <nav className="text-base md:ml-auto">
            <a href="#Home" className="mr-5 duration-300 hover:text-blue-400">
              Home
            </a>
            <a href="#About" className="mr-5 duration-300 hover:text-blue-400">
              About
            </a>
            <a href="#Skills" className="mr-5 duration-300 hover:text-blue-400">
              Skills
            </a>
            <a href="#Projects" className="mr-5 duration-300 hover:text-blue-400">
              Projects
            </a>
            <a href="#Contact" className="duration-300 hover:text-blue-400">
              Contact
            </a>
          </nav>
        </div>
      </header> */}

      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2 p-8">
              <Image src={IconImage} alt="Joji.Iba" className="w-full h-auto" />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="Turning Vision Into Reality With Code And Design."
                className="!text-6xl !text-left"
              />
              <p className="my-4 text-base font-medium">
                As a skilled full-stack developer, I am dedicated to turning
                ideas into innovative web applications. Explore my latest
                projects and articles, showcasing my expertise in React.js and
                web development.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/dummy.pdf"
                  target={'_blank'}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark"
                  download={true}
                >
                  Resume <LinkArrow className={'w-6 ml-1'} />
                </Link>
                <Link
                  href="mailto:jmry18.0921@gmail.com"
                  target={'_blank'}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-8 inline-block w-24">
          <Image src={LightBulbSvg} alt="Joji Iba" className="w-full h-auto" />
        </div>
      </main>

      <section className="text-dark min-h-screen" id="home">
        <div className="container mx-auto flex flex-col items-center px-5 py-20 md:flex-row">
          <div className="mb-16 flex-grow text-center md:w-1/2 md:pr-16 md:text-left lg:pr-24">
            <h1 className="mb-4 text-3xl font-medium text-gray-900 sm:text-6xl">
              Hi!
              <br />
              I'm Joji Iba
              <br />
              Web Developer
            </h1>
            <p className="mb-8 leading-relaxed">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam a
              ad asperiores quia accusantium impedit voluptate aspernatur,
              reiciendis officiis omnis!
            </p>
            <button className="rounded border-0 bg-green-500 px-6 py-2 text-lg text-white duration-300 hover:bg-green-600">
              Contact
            </button>
          </div>
          <div className="w-5/6 md:w-1/2 lg:max-w-lg">
            <Image src={IconImage} />
          </div>
        </div>
      </section>

      <section
        className="border-t border-gray-200 text-dark min-h-screen"
        id="about"
      >
        <div className="container mx-auto px-5 py-24">
          <div className="mb-20 text-center">
            <h1 className="mb-2 text-2xl font-medium text-gray-900 sm:text-3xl">
              About Me
            </h1>
            <p className="pb-10">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quae
              iure accusantium modi qui corrupti esse accusamus officiis itaque
              ex vitae?
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              earum magnam. Cupiditate at saepe placeat id nesciunt, vero magnam
              porro labore quas enim ab possimus cumque libero velit doloremque
              necessitatibus minima pariatur itaque nisi eaque maxime ex ipsa
              dolore asperiores? Provident, neque veniam dignissimos id sapiente
              iste esse itaque iusto repellat, quisquam corrupti voluptates
              accusantium? Pariatur neque quo libero quasi, quaerat ex, tempore
              iusto esse corrupti provident minus veniam modi voluptatum
              officiis aperiam est unde minima repellat, odio tenetur quisquam
              molestias placeat. Sunt, ex omnis. Accusamus doloribus ipsum ullam
              alias unde! Amet nulla ad excepturi expedita odio suscipit
              reiciendis voluptatibus.
            </p>
          </div>
          {/* カードのdivタグ */}
          <div className="flex flex-wrap">
            <div className="md:w-1/3 p-4">
              <div className="rounded-lg bg-gray-200 p-8">
                <div className="flex items-center mb-3">
                  <div className="rounded-full bg-green-500 text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium voluptate temporibus sunt harum a aspernatur
                    cumque error ex dolore eius.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="rounded-lg bg-gray-200 p-8">
                <div className="flex items-center mb-3">
                  <div className="rounded-full bg-green-500 text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium voluptate temporibus sunt harum a aspernatur
                    cumque error ex dolore eius.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:w-1/3 p-4">
              <div className="rounded-lg bg-gray-200 p-8">
                <div className="flex items-center mb-3">
                  <div className="rounded-full bg-green-500 text-white">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 21.5L17.5 13L13 10L15 2.5L6.5 11L11 14L9 21.5Z"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                  <h2 className="text-gray-900 text-lg font-medium ml-2">
                    Web Developer
                  </h2>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Accusantium voluptate temporibus sunt harum a aspernatur
                    cumque error ex dolore eius.
                  </p>
                  <a href="#" className="flex mt-3 text-green-500 items-center">
                    もっと見る
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-gray-200 text-dark min-h-screen"
        id="skills"
      >
        <div className="container mx-auto px-5 py-24 flex flex-wrap">
          {/* left side */}
          <div className="mb-10 lg:mb-0 w-full lg:w-1/2 flex justify-center">
            <Image src={SkillsImage} className="rounded" />
          </div>
          {/* rigtt side */}
          <div className="lg:pl-12 lg:py-6 w-full lg:w-1/2">
            <h1 className="text-2xl sm:text-3xl font-medium text-gray-900 mb-10 text-center lg:text-left">
              My Skill
            </h1>
            <div className="w-full">
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: '85%' }}
                >
                  85%
                </div>
              </div>
              <h2>CSS</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: '75%' }}
                >
                  75%
                </div>
              </div>
              <h2>JavaScript</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: '65%' }}
                >
                  65%
                </div>
              </div>
              <h2>HTML</h2>
              <div className="shadow bg-green-100 mt-2 w-full">
                <div
                  className="bg-green-600 text-xs leading-none py-1 text-center text-white"
                  style={{ width: '85%' }}
                >
                  85%
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="border-t border-gray-200 text-dark min-h-screen"
        id="projects"
      >
        <div className="container mx-auto px-5 py-24 flex flex-wrap"></div>
      </section>
    </>
  )
}
