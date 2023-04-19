'use client';
import Icons, { Arrow, Mouse } from 'app/components/Ui/DataDisplay/Icons';
import Img from 'app/components/Ui/DataDisplay/Image';
import Tooltip from 'app/components/Ui/DataDisplay/Tooltip';
import Button from 'app/components/Ui/Inputs/Button';
import Link from 'app/components/Ui/Navigation/Link';

import useColorMode from 'hooks/useColorMode';
import { NAVIGATION_LINKS, THEMES } from 'utils/Constants';

export default function LeftBar() {
  const [colorMode, setClorMode] = useColorMode();
  const { DARK, LIGHT } = THEMES;
  const toggleTheme = () => setClorMode(colorMode === LIGHT ? DARK : LIGHT);

  //   const ret = (
  //     <Container
  //       type="Aside"
  //       onClick={handleShowFullMenu}
  //       onMouseEnter={handleShowParcialMenu}
  //       onMouseLeave={handleHideParcialMenu}
  //       className={`pr-m text-lg-primary-lightest ${aside}
  // `}
  //     >
  //       <ConfigWrapper className={config} shrink={hideFullMenu} />
  //       <Mouse className="absolute -right-6 top-6 animate-hover-here opacity-0 transition-slow" />
  //       <Button
  //         typeOf="InteractiveLogo"
  //         className={`${logo} border-lg-primary dark:border-dk-primary`}
  //         onClick={handleSetShowFullMenu}
  //       />
  //       <Menu content={NAVIGATION_LINKS} styles={menu} />
  //     </Container>
  //   );

  const Return = (
    <aside
      className={[
        'group/aside -ml-[9.9rem] flex h-full w-40 flex-col bg-lg-primary text-lg-primary-base @container transition-slow hover:ml-0 hover:w-16 dark:bg-dk-primary',
        'has-open:ml-0 has-open:w-44 has-open:bg-lg-secondary has-open:dark:bg-dk-secondary',
        'child:transition-slow '
      ].join(' ')}
    >
      <div className="relative -top-16 z-10 w-full bg-lg-primary transition-slow has-open:bg-lg-secondary">
        <div className="relative h-xl rounded-l-full border-y-8 border-l-8 border-lg-primary transition-slow has-open:pr-xl has-open:pl-m dark:border-dk-primary">
          <div className="mr-2 flex h-[calc(100%+8px)] items-center justify-between border-b-[0.1rem] border-lg-primary-base/40 transition-slow child:transition-slow has-open:border-lg-primary-base/0">
            {/* TOGGLE THEME MODE*/}
            <Button
              typeOf="DarkModeToggle"
              aria-label="Dark mode toggle"
              onClick={toggleTheme}
            >
              <Tooltip close position="bottom-start" title="Mudar Tema" />
            </Button>
            {/* TOGGLE NOTIGICATIONS*/}
            <Button
              typeOf="Notifications"
              aria-label="Notifications"
              onClick={() => {
                //nothing happened for now
              }}
            >
              <Tooltip close position="bottom" title="Silênciar" />;
            </Button>
            {/* SETTINGS*/}
            <Button
              typeOf="Settings"
              aria-label="Settings"
              onClick={() => {
                //nothing happened for now
              }}
            >
              <Tooltip close position={'bottom-start'} title="Configurações" />
            </Button>
            <label
              className={[
                'border-secondary-default dark:border-secondary-dark group flex h-16 w-16 cursor-pointer rounded-full border-8 border-lg-primary p-xs dark:border-dk-primary',
                'absolute -right-24 bg-lg-primary center-x group-hover/aside:-right-16',
                'child:transition-slow has-open:-right-3 has-open:bg-lg-secondary has-open:p-xxs'
              ].join(' ')}
              htmlFor="open-menu"
            >
              <input type="checkbox" className="peer hidden" id="open-menu" />
              <Mouse className="absolute right-16 top-6 animate-hover-here transition-faster group-hover/aside:opacity-0 peer-checked:opacity-0" />
              <Img
                size={24}
                image="logo"
                className="absolute w-5 group-hover:opacity-100 peer-checked:translate-x-2.5"
              />
              <Img
                size={26}
                image="name"
                className="absolute top-5 right-2 w-5 group-hover:opacity-100 peer-checked:!opacity-0 peer-checked:center-y"
              />
              <Img
                size={48}
                image="waves"
                className="absolute -bottom-1 w-9 group-hover:opacity-100 peer-checked:bottom-1 peer-checked:w-8 peer-checked:translate-y-[0.15rem] peer-checked:translate-x-[0.25rem]"
              />
            </label>
          </div>
        </div>
      </div>
      <nav className="relative -top-16">
        <ul className={`w-full pt-4 transition-fast`}>
          {NAVIGATION_LINKS.map(({ content, icon, title }, index) => (
            <li key={`left-menu-${index}`}>
              {content && (
                <div className={` flex flex-col pl-s transition-fast`}>
                  <input
                    type="checkbox"
                    className="peer hidden"
                    id={`${title}-control-dropdown`}
                  ></input>
                  <label
                    htmlFor={`${title}-control-dropdown`}
                    className={[
                      'btn-menu-control group relative',
                      '@[70px]:gap-2.5',
                      'peer-checked:bg-lg-primary-base/100 peer-checked:text-lg-secondary peer-checked:transition-none peer-checked:dark:!bg-dk-primary-base/100 peer-checked:dark:text-dk-secondary-base',
                      'peer-checked:before:opacity-100 peer-checked:before:transition-none',
                      'peer-checked:after:opacity-100 peer-checked:after:transition-none',
                      'peer-checked:[&>svg:nth-child(3)]:rotate-90',
                      'child:transition-faster'
                    ].join(' ')}
                  >
                    <Icons icon={icon} className="min-w-min" />
                    <p
                      className={`invisible w-24 text-sm font-medium opacity-0 @[176px]:visible @[176px]:opacity-100`}
                    >
                      {title}
                    </p>
                    <Arrow className="absolute right-1 min-w-min @[176px]:right-2.5" />
                    <Tooltip
                      title={title}
                      position="right"
                      close
                      className="@[70px]:hidden"
                    />
                  </label>
                  <ul
                    className={[
                      'invisible my-1 ml-4 flex max-h-0 flex-col flex-nowrap overflow-hidden opacity-0 transition-faster',
                      'peer-checked:visible peer-checked:max-h-96 peer-checked:opacity-100',
                      'peer-checked:[&>li>a>p]:animate-intro-menu',
                      'peer-checked:[&>*:nth-child(1)>a>p]:animation-delay-75',
                      'peer-checked:[&>*:nth-child(2)>a>p]:animation-delay-100',
                      'peer-checked:[&>*:nth-child(3)>a>p]:animation-delay-150',
                      'peer-checked:[&>*:nth-child(4)>a>p]:animation-delay-200',
                      'peer-checked:[&>*:nth-child(5)>a>p]:animation-delay-300',
                      'peer-checked:[&>*:nth-child(6)>a>p]:animation-delay-500'
                    ].join(' ')}
                  >
                    {content.map(({ href, icon, title }) => {
                      const Return = (
                        <li
                          className={`border-l-2 border-l-lg-primary-base/30 transition-faster hover:border-l-lg-primary-base/100`}
                        >
                          <Link
                            href={href}
                            className={`group flex items-center justify-start gap-2 p-s fill-mode-forwards transition-faster`}
                          >
                            <Icons icon={icon} className="min-w-min" />
                            <p
                              className={`min-w-0 overflow-hidden whitespace-nowrap text-xs opacity-0 transition-fast @[176px]:min-w-[5rem]`}
                            >
                              {title}
                            </p>
                            <Tooltip
                              close
                              title={title}
                              position="right"
                              className="@[70px]:hidden"
                            />
                          </Link>
                        </li>
                      );

                      // enum EDelay {
                      //   'animation-delay-[40ms]!',
                      //   'animation-delay-[60ms]!',
                      //   'animation-delay-[80ms]!',
                      //   'animation-delay-[100ms]!',
                      //   'animation-delay-[120ms]!',
                      //   'animation-delay-[140ms]!'
                      // }
                      // const delay = EDelay[index];
                      // const Ret = (
                      //   <li
                      //     className="border-l-2 border-l-lg-primary-base/0"
                      //     key={`${title}-${index}`}
                      //   >
                      //     <Link
                      //       href={href}
                      //       onClick={onClick}
                      //       className={`${delay} group flex translate-x-[25px] items-center p-s opacity-0 fill-mode-forwards transition-faster`}
                      //     >
                      //       <Icons icon={icon} className="mr-s transition-faster" />
                      //       <p
                      //         className={`w-24 text-[0.80rem] font-medium transition-faster`}
                      //       >
                      //         {title}
                      //       </p>
                      //       <Tooltip title={title} position="right" close />
                      //     </Link>
                      //   </li>
                      // );
                      return Return;
                    })}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );

  return Return;
}

// function variantStyles(hideFullMenu: boolean, showParcialMenu: boolean) {
//   const menuShrinkStyles = [
//     '[&>button:first-child]:w-1/3 [&>button:first-child]:self-end [&>button:first-child]:px-m',
//     '[&>button:first-child>svg:nth-child(2)]:hidden',
//     '[&>button:first-child>p]:hidden',
//     '[&>ul]:items-end [&>ul]:mr-[7%]',
//     '[&>ul>li>a>p]:hidden'
//   ].join(' ');

//   const mappingStyles = {
//     hide: {
//       aside: '-translate-x-full bg-lg-primary dark:bg-dk-primary [&_svg]:!opacity-100',
//       config: '',
//       logo: '',
//       menu: `[&>button:first-child]:pointer-events-none ${menuShrinkStyles}`
//     },
//     full: {
//       aside: 'bg-lg-secondary dark:bg-dk-secondary',
//       config: '',
//       logo: [
//         '-translate-x-full bg-lg-secondary border-8 dark:bg-dk-secondary right-0 mr-l',
//         '[&>img]:p-xxs',
//         '[&>img:nth-child(1)]:-translate-y-[0.1rem] [&>img:nth-child(1)]:translate-x-[0.4rem]',
//         '[&>img:nth-child(2)]:!opacity-0',
//         '[&>img:nth-child(3)]:w-8 [&>img:nth-child(3)]:translate-y-[0.1rem] [&>img:nth-child(3)]:translate-x-[0.2rem]'
//       ].join(' '),
//       menu: '[&>button:first-child>div]:hidden [&>ul>li>a>div]:hidden [&>ul]:ml-[3%]'
//     },
//     parcial: {
//       aside: [
//         '-translate-x-2/3 bg-lg-primary dark:bg-dk-primary',
//         '[&>div:first-child]:ml-40 [&>div:first-child]:pl-0 [&>div:first-child]:pr-40'
//       ].join(' '),
//       config: '-translate-x-3 [&>div:first-child]:bg-lg-primary-base/40',
//       logo: '-translate-x-10 scale-90 animate-pulse',
//       menu: `${menuShrinkStyles}`
//     }
//   };

//   const { hide, parcial, full } = mappingStyles;
//   return hideFullMenu && showParcialMenu ? parcial : hideFullMenu ? hide : full;
// }
