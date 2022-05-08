// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7G8n9jwdE5WowDWbWsVZ26
// Component: SdUjRTTX8FNMya
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import NavBar from "../../NavBar"; // plasmic-import: bGODP7QmU1IFXw/component
import Button from "../../Button"; // plasmic-import: TeHqZuNjGboLlH/component
import { CategoryCollection } from "@plasmicpkgs/commerce"; // plasmic-import: ny07p45F84c_/codeComponent
import { CategoryField } from "@plasmicpkgs/commerce"; // plasmic-import: hzqiq--xdG5T/codeComponent
import { ProductCollection } from "@plasmicpkgs/commerce"; // plasmic-import: vU2jzVAnFP/codeComponent
import ProductCard from "../../ProductCard"; // plasmic-import: r4g8NclKGXHCM0/component
import Rating from "../../Rating"; // plasmic-import: YwX3tQC_9DPMnH/component
import { ProductTextField } from "@plasmicpkgs/commerce"; // plasmic-import: S1F4q0wN6b/codeComponent
import Footer from "../../Footer"; // plasmic-import: yupoJ9vNpJ7q5T/component

import { useScreenVariants as useScreenVariantswtJ2E0HlkJw0X } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: wtJ2E0HLK-JW0X/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_full_commerce_storefront_primary_copy.module.css"; // plasmic-import: 7G8n9jwdE5WowDWbWsVZ26/projectcss
import sty from "./PlasmicCategory.module.css"; // plasmic-import: SdUjRTTX8FNMya/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: 16E9ppEzL5I4sF/icon

export type PlasmicCategory__VariantMembers = {};

export type PlasmicCategory__VariantsArgs = {};
type VariantPropType = keyof PlasmicCategory__VariantsArgs;
export const PlasmicCategory__VariantProps = new Array<VariantPropType>();

export type PlasmicCategory__ArgsType = {};
type ArgPropType = keyof PlasmicCategory__ArgsType;
export const PlasmicCategory__ArgProps = new Array<ArgPropType>();

export type PlasmicCategory__OverridesType = {
  root?: p.Flex<"div">;
  navBar?: p.Flex<typeof NavBar>;
  section?: p.Flex<"section">;
  container6?: p.Flex<"div">;
  categoryCollection?: p.Flex<typeof CategoryCollection>;
  categoryField?: p.Flex<typeof CategoryField>;
  productCollection?: p.Flex<typeof ProductCollection>;
  productCard?: p.Flex<typeof ProductCard>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultCategoryProps {}

function PlasmicCategory__RenderFunc(props: {
  variants: PlasmicCategory__VariantsArgs;
  args: PlasmicCategory__ArgsType;
  overrides: PlasmicCategory__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantswtJ2E0HlkJw0X()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
        <title key="title">{"Category"}</title>
        <meta key="og:title" property="og:title" content={"Category"} />
        <meta
          key="description"
          property="og:description"
          name="description"
          content={
            "Inceptos tempor torquent tortor a aptent parturient a a himenaeos in ipsum ad vestibulum euismod ultrices dis vulputate vestibulum non adipiscing."
          }
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <NavBar
            data-plasmic-name={"navBar"}
            data-plasmic-override={overrides.navBar}
            className={classNames("__wab_instance", sty.navBar)}
            searchOpen={true}
          />

          <section
            data-plasmic-name={"section"}
            data-plasmic-override={overrides.section}
            className={classNames(projectcss.all, sty.section)}
          >
            <p.Stack
              as={"div"}
              data-plasmic-name={"container6"}
              data-plasmic-override={overrides.container6}
              hasGap={true}
              className={classNames(projectcss.all, sty.container6)}
            >
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.freeBox__xIbkm)}
              >
                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___4DaYj)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__uBvlk
                    )}
                  >
                    {"Categories"}
                  </div>

                  <Button
                    className={classNames("__wab_instance", sty.button__hU08T)}
                    states={"active" as const}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text___9SzdY
                      )}
                    >
                      {"All"}
                    </div>
                  </Button>

                  <CategoryCollection
                    data-plasmic-name={"categoryCollection"}
                    data-plasmic-override={overrides.categoryCollection}
                    className={classNames(
                      "__wab_instance",
                      sty.categoryCollection
                    )}
                    emptyMessage={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__q9GkI
                        )}
                      >
                        {"No collection found!"}
                      </div>
                    }
                    loadingMessage={
                      <div
                        className={classNames(
                          projectcss.all,
                          projectcss.__wab_text,
                          sty.text__wfDeo
                        )}
                      >
                        {"Loading..."}
                      </div>
                    }
                  >
                    <Button
                      className={classNames(
                        "__wab_instance",
                        sty.button__f1Zl8
                      )}
                    >
                      <CategoryField
                        data-plasmic-name={"categoryField"}
                        data-plasmic-override={overrides.categoryField}
                        className={classNames(
                          "__wab_instance",
                          sty.categoryField
                        )}
                        field={"name" as const}
                      />
                    </Button>
                  </CategoryCollection>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___7KfE9)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__tsWcW
                    )}
                  >
                    {"Price"}
                  </div>

                  <Button
                    className={classNames("__wab_instance", sty.button__zqckQ)}
                  >
                    {"$0 - $50"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__im6UN)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__fPCvF
                      )}
                    >
                      {"$51 - $99"}
                    </div>
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__k9MCu)}
                  >
                    {"$101+"}
                  </Button>
                </p.Stack>

                <p.Stack
                  as={"div"}
                  hasGap={true}
                  className={classNames(projectcss.all, sty.freeBox___8EVn)}
                >
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__fxurv
                    )}
                  >
                    {"Brands"}
                  </div>

                  <Button
                    className={classNames("__wab_instance", sty.button__i6TeH)}
                  >
                    {"Adidas"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__mrdVd)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__aVqn6
                      )}
                    >
                      {"Asics"}
                    </div>
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__j02R9)}
                  >
                    {"Crocs"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__lUdww)}
                  >
                    {"Fila"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__hgftT)}
                  >
                    {"Nike"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__dkArf)}
                  >
                    {"Puma"}
                  </Button>

                  <Button
                    className={classNames("__wab_instance", sty.button__xgc5F)}
                  >
                    {"Reebok"}
                  </Button>
                </p.Stack>
              </p.Stack>

              <ProductCollection
                data-plasmic-name={"productCollection"}
                data-plasmic-override={overrides.productCollection}
                className={classNames("__wab_instance", sty.productCollection)}
                count={16 as const}
                emptyMessage={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__ddwW
                    )}
                  >
                    {"No product found!"}
                  </div>
                }
                loadingMessage={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text___7FRmQ
                    )}
                  >
                    {"Loading..."}
                  </div>
                }
                sort={"price-asc" as const}
              >
                <ProductCard
                  data-plasmic-name={"productCard"}
                  data-plasmic-override={overrides.productCard}
                  className={classNames("__wab_instance", sty.productCard)}
                  small={true}
                />
              </ProductCollection>
            </p.Stack>
          </section>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "navBar",
    "section",
    "container6",
    "categoryCollection",
    "categoryField",
    "productCollection",
    "productCard",
    "footer"
  ],
  navBar: ["navBar"],
  section: [
    "section",
    "container6",
    "categoryCollection",
    "categoryField",
    "productCollection",
    "productCard"
  ],
  container6: [
    "container6",
    "categoryCollection",
    "categoryField",
    "productCollection",
    "productCard"
  ],
  categoryCollection: ["categoryCollection", "categoryField"],
  categoryField: ["categoryField"],
  productCollection: ["productCollection", "productCard"],
  productCard: ["productCard"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  navBar: typeof NavBar;
  section: "section";
  container6: "div";
  categoryCollection: typeof CategoryCollection;
  categoryField: typeof CategoryField;
  productCollection: typeof ProductCollection;
  productCard: typeof ProductCard;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicCategory__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicCategory__VariantsArgs;
    args?: PlasmicCategory__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicCategory__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicCategory__ArgsType, ReservedPropsType> &
    // Specify overrides for each element directly as props
    Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    // Specify props for the root element
    Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicCategory__ArgProps,
      internalVariantPropNames: PlasmicCategory__VariantProps
    });

    return PlasmicCategory__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicCategory";
  } else {
    func.displayName = `PlasmicCategory.${nodeName}`;
  }
  return func;
}

export const PlasmicCategory = Object.assign(
  // Top-level PlasmicCategory renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    navBar: makeNodeComponent("navBar"),
    section: makeNodeComponent("section"),
    container6: makeNodeComponent("container6"),
    categoryCollection: makeNodeComponent("categoryCollection"),
    categoryField: makeNodeComponent("categoryField"),
    productCollection: makeNodeComponent("productCollection"),
    productCard: makeNodeComponent("productCard"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicCategory
    internalVariantProps: PlasmicCategory__VariantProps,
    internalArgProps: PlasmicCategory__ArgProps
  }
);

export default PlasmicCategory;
/* prettier-ignore-end */
