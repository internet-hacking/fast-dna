import * as React from "react";
import { Breadcrumb, BreadcrumbHandledProps } from "./index";
import { ComponentFactoryExample } from "@microsoft/fast-development-site-react";
import schema from "@microsoft/fast-components-react-base/dist/breadcrumb/breadcrumb.schema.json";
import Documentation from "./.tmp/documentation";

export default {
    name: "Breadcrumb",
    component: Breadcrumb,
    schema: schema as any,
    documentation: <Documentation />,
    detailData: {
        label: "breadcrumb",
        /* tslint:disable-next-line */
        seperator: (className?: string): React.ReactNode => {
            return <div className={className}>\</div>;
        },
        children: [
            {
                id: "breadcrumb-item",
                props: {
                    href: "https://www.microsoft.com/en-us/",
                    children: "breadcrumb item 1",
                },
            },
            {
                id: "breadcrumb-item",
                props: {
                    href: "https://www.microsoft.com/en-us/",
                    children: "breadcrumb item 2",
                },
            },
            {
                id: "breadcrumb-item",
                props: {
                    href: "https://www.microsoft.com/en-us/",
                    children: "breadcrumb item 3",
                },
            },
        ],
    },
    data: [
        {
            label: "breadcrumb",
            /* tslint:disable-next-line */
            seperator: (className?: string): React.ReactNode => {
                return <div className={className}>\</div>;
            },
            children: [
                {
                    id: "breadcrumb-item",
                    props: {
                        href: "https://www.microsoft.com/en-us/",
                        children: "breadcrumb item 1",
                    },
                },
                {
                    id: "breadcrumb-item",
                    props: {
                        href: "https://www.microsoft.com/en-us/",
                        children: "breadcrumb item 2",
                    },
                },
                {
                    id: "breadcrumb-item",
                    props: {
                        href: "https://www.microsoft.com/en-us/",
                        children: "breadcrumb item 2",
                    },
                },
                {
                    id: "breadcrumb-item",
                    props: {
                        href: "https://www.microsoft.com/en-us/",
                        children: "breadcrumb item 3",
                    },
                },
            ],
        },
        {
            label: "breadcrumb",
            children: [
                {
                    id: "breadcrumb-item",
                    props: {
                        href: "https://www.microsoft.com/en-us/",
                        children: "breadcrumb item 1",
                    },
                },
                {
                    id: "breadcrumb-item",
                    props: {
                        href: "https://www.microsoft.com/en-us/",
                        children: "breadcrumb item 2",
                    },
                },
                {
                    id: "breadcrumb-item",
                    props: {
                        href: "https://www.microsoft.com/en-us/",
                        children: "breadcrumb item 2",
                    },
                },
                {
                    id: "breadcrumb-item",
                    props: {
                        href: "https://www.microsoft.com/en-us/",
                        children: "breadcrumb item 3",
                    },
                },
            ],
        },
    ],
} as ComponentFactoryExample<BreadcrumbHandledProps>;