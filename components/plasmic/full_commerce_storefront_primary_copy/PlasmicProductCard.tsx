// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7G8n9jwdE5WowDWbWsVZ26
// Component: r4g8NclKGXHCM0
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
import { ProductMedia } from "@plasmicpkgs/commerce"; // plasmic-import: qpULM0wwWW/codeComponent
import Button from "../../Button"; // plasmic-import: TeHqZuNjGboLlH/component
import Rating from "../../Rating"; // plasmic-import: YwX3tQC_9DPMnH/component
import { ProductTextField } from "@plasmicpkgs/commerce"; // plasmic-import: S1F4q0wN6b/codeComponent
import { ProductPriceComponent } from "@plasmicpkgs/commerce"; // plasmic-import: _PaJxGc8gf/codeComponent

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_full_commerce_storefront_primary_copy.module.css"; // plasmic-import: 7G8n9jwdE5WowDWbWsVZ26/projectcss
import sty from "./PlasmicProductCard.module.css"; // plasmic-import: r4g8NclKGXHCM0/css

import MenuIcon from "./icons/PlasmicIcon__Menu"; // plasmic-import: 16E9ppEzL5I4sF/icon

export type PlasmicProductCard__VariantMembers = {
  small: "small";
};

export type PlasmicProductCard__VariantsArgs = {
  small?: SingleBooleanChoiceArg<"small">;
};

type VariantPropType = keyof PlasmicProductCard__VariantsArgs;
export const PlasmicProductCard__VariantProps = new Array<VariantPropType>(
  "small"
);

export type PlasmicProductCard__ArgsType = {
  tags?: React.ReactNode;
  children?: React.ReactNode;
  link?: string;
  rating?: React.ReactNode;
  img?: React.ComponentProps<typeof p.PlasmicImg>["src"];
};

type ArgPropType = keyof PlasmicProductCard__ArgsType;
export const PlasmicProductCard__ArgProps = new Array<ArgPropType>(
  "tags",
  "children",
  "link",
  "rating",
  "img"
);

export type PlasmicProductCard__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
  productMedia?: p.Flex<typeof ProductMedia>;
  productPrice?: p.Flex<typeof ProductPriceComponent>;
};

export interface DefaultProductCardProps {
  tags?: React.ReactNode;
  children?: React.ReactNode;
  link?: string;
  rating?: React.ReactNode;
  img?: React.ComponentProps<typeof p.PlasmicImg>["src"];
  small?: SingleBooleanChoiceArg<"small">;
  className?: string;
}

function PlasmicProductCard__RenderFunc(props: {
  variants: PlasmicProductCard__VariantsArgs;
  args: PlasmicProductCard__ArgsType;
  overrides: PlasmicProductCard__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;
  const $props = props.args;

  const [isRootHover, triggerRootHoverProps] = useTrigger("useHover", {});
  const triggers = {
    hover_root: isRootHover
  };

  return (
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
        sty.root,
        { [sty.rootsmall]: hasVariant(variants, "small", "small") }
      )}
      data-plasmic-trigger-props={[triggerRootHoverProps]}
    >
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link, {
          [sty.linksmall]: hasVariant(variants, "small", "small")
        })}
        component={Link}
        href={args.link !== undefined ? args.link : ("/item" as const)}
        platform={"nextjs"}
      >
        <ProductMedia
          data-plasmic-name={"productMedia"}
          data-plasmic-override={overrides.productMedia}
          className={classNames("__wab_instance", sty.productMedia, {
            [sty.productMediasmall]: hasVariant(variants, "small", "small")
          })}
        />

        {(
          hasVariant(variants, "small", "small") && triggers.hover_root
            ? true
            : false
        ) ? (
          <div
            className={classNames(projectcss.all, sty.freeBox__zesr3, {
              [sty.freeBoxsmall__zesr30ZElX]: hasVariant(
                variants,
                "small",
                "small"
              )
            })}
          />
        ) : null}
        {(hasVariant(variants, "small", "small") ? true : true) ? (
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(projectcss.all, sty.freeBox___6Y9Az, {
              [sty.freeBoxsmall___6Y9Az0ZElX]: hasVariant(
                variants,
                "small",
                "small"
              )
            })}
          >
            <div className={classNames(projectcss.all, sty.freeBox__nMcVf)}>
              {p.renderPlasmicSlot({
                defaultContents: (
                  <Button colors={"lightGray" as const} size={"small" as const}>
                    {"New"}
                  </Button>
                ),

                value: args.tags
              })}

              {p.renderPlasmicSlot({
                defaultContents: (
                  <Rating
                    className={classNames("__wab_instance", sty.rating__lOt3P)}
                  />
                ),

                value: args.rating
              })}
            </div>

            <p.Stack
              as={"div"}
              hasGap={true}
              className={classNames(projectcss.all, sty.freeBox__pv04O)}
            >
              {p.renderPlasmicSlot({
                defaultContents: (
                  <React.Fragment>
                    <ProductTextField
                      className={classNames(
                        "__wab_instance",
                        sty.productTextField__ciBxD
                      )}
                      field={"name" as const}
                    />

                    <ProductTextField
                      className={classNames(
                        "__wab_instance",
                        sty.productTextField___5PgSk
                      )}
                      field={"description" as const}
                    />
                  </React.Fragment>
                ),
                value: args.children
              })}
            </p.Stack>

            <ProductPriceComponent
              data-plasmic-name={"productPrice"}
              data-plasmic-override={overrides.productPrice}
              className={classNames("__wab_instance", sty.productPrice)}
            />
          </p.Stack>
        ) : null}
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link", "productMedia", "productPrice"],
  link: ["link", "productMedia", "productPrice"],
  productMedia: ["productMedia"],
  productPrice: ["productPrice"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
  productMedia: typeof ProductMedia;
  productPrice: typeof ProductPriceComponent;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicProductCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicProductCard__VariantsArgs;
    args?: PlasmicProductCard__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicProductCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicProductCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicProductCard__ArgProps,
      internalVariantPropNames: PlasmicProductCard__VariantProps
    });

    return PlasmicProductCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicProductCard";
  } else {
    func.displayName = `PlasmicProductCard.${nodeName}`;
  }
  return func;
}

export const PlasmicProductCard = Object.assign(
  // Top-level PlasmicProductCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),
    productMedia: makeNodeComponent("productMedia"),
    productPrice: makeNodeComponent("productPrice"),

    // Metadata about props expected for PlasmicProductCard
    internalVariantProps: PlasmicProductCard__VariantProps,
    internalArgProps: PlasmicProductCard__ArgProps
  }
);

export default PlasmicProductCard;
/* prettier-ignore-end */
