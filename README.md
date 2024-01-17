> [!NOTE]  
> This Extension is no longer needed! AWS now includes icons for services directly. So,
> rather than upgrade this to Manifest v3 - I'm going to archive it.

# Simple Iconification Service

**NOT AN AMAZON OR AWS PRODUCT OR SERVICE AND NOT AFFILIATED WITH MY EMPLOYER IN ANY WAY**

## Why?

Saw a [tweet](https://twitter.com/6siiix/status/1233196479243665408); made a thing.

I'm not a natural Javascript developer, the last Chrome Extension of any kind
I worked on was TweetDeck before it became part of Twitter.

## What does this do?

When you browse the AWS Console, this extension will go ahead and attempt to
match the service icon to the service and then display that instead of the
Orange cube. This is great for when you are working with loads of Console Tabs
open and you want to quickly scan the one you want.

I have used the [AWS Architecture Icons](https://aws.amazon.com/architecture/icons/)
as the initial starting point.

## Supported Browsers

I went ahead and tested this with Firefox, Chrome and Edge. It is why I load
the icons by using Extension URLs, as Firefox doesn't support loading from a
package in a WebExtension API extension.

## Using as a Temporary Extension

Clone the repo then use the Load Unpacked Extension.
