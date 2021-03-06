// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7G8n9jwdE5WowDWbWsVZ26
// Component: bGODP7QmU1IFXw
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
import Button from "../../Button"; // plasmic-import: TeHqZuNjGboLlH/component
import TextInput from "../../TextInput"; // plasmic-import: ifpHUSs7fyJDus/component
import { CartComponent } from "@plasmicpkgs/commerce"; // plasmic-import: UGhhaf1AiUhF/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_full_commerce_storefront_primary_copy.module.css"; // plasmic-import: 7G8n9jwdE5WowDWbWsVZ26/projectcss
import sty from "./PlasmicNavBar.module.css"; // plasmic-import: bGODP7QmU1IFXw/css

import HomeIcon from "./icons/PlasmicIcon__Home"; // plasmic-import: sXEgISZXILGkRM/icon
import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: 16E9ppEzL5I4sF/icon
import SearchIcon from "./icons/PlasmicIcon__Search"; // plasmic-import: vG1AkmUuodQSDe/icon
import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: fOyy2pRghCwtrK/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: FNBxAcIPXrvYO8/icon
import ProfileIcon from "./icons/PlasmicIcon__Profile"; // plasmic-import: mmtlVRPqrjV7Hl/icon
import CartIcon from "./icons/PlasmicIcon__Cart"; // plasmic-import: OWfAQ_tMxz5EKy/icon

export type PlasmicNavBar__VariantMembers = {
  searchOpen: "searchOpen";
};

export type PlasmicNavBar__VariantsArgs = {
  searchOpen?: SingleBooleanChoiceArg<"searchOpen">;
};

type VariantPropType = keyof PlasmicNavBar__VariantsArgs;
export const PlasmicNavBar__VariantProps = new Array<VariantPropType>(
  "searchOpen"
);

export type PlasmicNavBar__ArgsType = {};
type ArgPropType = keyof PlasmicNavBar__ArgsType;
export const PlasmicNavBar__ArgProps = new Array<ArgPropType>();

export type PlasmicNavBar__OverridesType = {
  root?: p.Flex<"section">;
  homeButton?: p.Flex<typeof Button>;
  searchButton?: p.Flex<typeof Button>;
  searchInput?: p.Flex<typeof TextInput>;
  profileButton?: p.Flex<typeof Button>;
  cartButton?: p.Flex<typeof Button>;
  cart?: p.Flex<typeof CartComponent>;
};

export interface DefaultNavBarProps {
  searchOpen?: SingleBooleanChoiceArg<"searchOpen">;
  className?: string;
}

function PlasmicNavBar__RenderFunc(props: {
  variants: PlasmicNavBar__VariantsArgs;
  args: PlasmicNavBar__ArgsType;
  overrides: PlasmicNavBar__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  return (
    <section
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
        sty.root,
        {
          [sty.rootsearchOpen]: hasVariant(variants, "searchOpen", "searchOpen")
        }
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__vDfMh, {
          [sty.freeBoxsearchOpen__vDfMhTHq0C]: hasVariant(
            variants,
            "searchOpen",
            "searchOpen"
          )
        })}
      >
        <Button
          data-plasmic-name={"homeButton"}
          data-plasmic-override={overrides.homeButton}
          link={"/" as const}
          showStartIcon={true}
          startIcon={
            <HomeIcon
              className={classNames(projectcss.all, sty.svg__sytY6)}
              role={"img"}
            />
          }
        >
          {"Home"}
        </Button>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(projectcss.all, sty.freeBox__hEyDm, {
            [sty.freeBoxsearchOpen__hEyDmtHq0C]: hasVariant(
              variants,
              "searchOpen",
              "searchOpen"
            )
          })}
        >
          {(hasVariant(variants, "searchOpen", "searchOpen") ? false : true) ? (
            <Button
              data-plasmic-name={"searchButton"}
              data-plasmic-override={overrides.searchButton}
              className={classNames("__wab_instance", {
                [sty.searchButtonsearchOpen]: hasVariant(
                  variants,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              iconOnly={true}
              link={"/category" as const}
              startIcon={
                <SearchIcon
                  className={classNames(projectcss.all, sty.svg__m7K2C)}
                  role={"img"}
                />
              }
            >
              {"Menu"}
            </Button>
          ) : null}
          {(hasVariant(variants, "searchOpen", "searchOpen") ? true : true) ? (
            <TextInput
              data-plasmic-name={"searchInput"}
              data-plasmic-override={overrides.searchInput}
              className={classNames("__wab_instance", sty.searchInput, {
                [sty.searchInputsearchOpen]: hasVariant(
                  variants,
                  "searchOpen",
                  "searchOpen"
                )
              })}
              placeholder={"Search..." as const}
            />
          ) : null}

          <Button
            data-plasmic-name={"profileButton"}
            data-plasmic-override={overrides.profileButton}
            iconOnly={true}
            startIcon={
              <ProfileIcon
                className={classNames(projectcss.all, sty.svg__k9Dve)}
                role={"img"}
              />
            }
          >
            {"Menu"}
          </Button>

          <div className={classNames(projectcss.all, sty.freeBox__zNuTm)}>
            <Button
              data-plasmic-name={"cartButton"}
              data-plasmic-override={overrides.cartButton}
              colors={"white" as const}
              rounded={true}
              showStartIcon={true}
              startIcon={
                <CartIcon
                  className={classNames(projectcss.all, sty.svg__suWan)}
                  role={"img"}
                />
              }
            >
              <CartComponent
                data-plasmic-name={"cart"}
                data-plasmic-override={overrides.cart}
                className={classNames("__wab_instance", sty.cart)}
                field={"Size" as const}
                hideIfIsEmpty={false}
              />
            </Button>
          </div>
        </p.Stack>
      </div>
    </section>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "homeButton",
    "searchButton",
    "searchInput",
    "profileButton",
    "cartButton",
    "cart"
  ],
  homeButton: ["homeButton"],
  searchButton: ["searchButton"],
  searchInput: ["searchInput"],
  profileButton: ["profileButton"],
  cartButton: ["cartButton", "cart"],
  cart: ["cart"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "section";
  homeButton: typeof Button;
  searchButton: typeof Button;
  searchInput: typeof TextInput;
  profileButton: typeof Button;
  cartButton: typeof Button;
  cart: typeof CartComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicNavBar__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNavBar__VariantsArgs;
    args?: PlasmicNavBar__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicNavBar__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNavBar__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNavBar__ArgProps,
      internalVariantPropNames: PlasmicNavBar__VariantProps
    });

    return PlasmicNavBar__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNavBar";
  } else {
    func.displayName = `PlasmicNavBar.${nodeName}`;
  }
  return func;
}

export const PlasmicNavBar = Object.assign(
  // Top-level PlasmicNavBar renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    homeButton: makeNodeComponent("homeButton"),
    searchButton: makeNodeComponent("searchButton"),
    searchInput: makeNodeComponent("searchInput"),
    profileButton: makeNodeComponent("profileButton"),
    cartButton: makeNodeComponent("cartButton"),
    cart: makeNodeComponent("cart"),

    // Metadata about props expected for PlasmicNavBar
    internalVariantProps: PlasmicNavBar__VariantProps,
    internalArgProps: PlasmicNavBar__ArgProps
  }
);

export default PlasmicNavBar;
/* prettier-ignore-end */
