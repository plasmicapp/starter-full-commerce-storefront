// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 7G8n9jwdE5WowDWbWsVZ26
import * as React from "react";
import { CommerceProviderComponent } from "@plasmicpkgs/commerce-swell"; // plasmic-import: tbDZqxoBkbo/codeComponent

export interface GlobalContextsProviderProps {
  children?: React.ReactElement;
  commerceProviderComponentProps?: Partial<
    Omit<React.ComponentProps<typeof CommerceProviderComponent>, "children">
  >;
}

export default function GlobalContextsProvider(
  props: GlobalContextsProviderProps
) {
  const { children, commerceProviderComponentProps } = props;

  return (
    <CommerceProviderComponent
      {...commerceProviderComponentProps}
      publicKey={
        commerceProviderComponentProps &&
        "publicKey" in commerceProviderComponentProps
          ? commerceProviderComponentProps.publicKey!
          : ("pk_IX9TXPCQpwoTzNixAkNsFcqUMle5qBE9" as const)
      }
      storeId={
        commerceProviderComponentProps &&
        "storeId" in commerceProviderComponentProps
          ? commerceProviderComponentProps.storeId!
          : ("plasmic-full-commerce-storefront" as const)
      }
    >
      {children}
    </CommerceProviderComponent>
  );
}