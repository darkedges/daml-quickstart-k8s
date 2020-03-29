// Generated from IouTrade.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as daml from '@daml/types';

import { Tuple2 } from '@ts/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import { Archive } from '@ts/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

import * as Iou from './Iou';

export type TradeProposal_Reject = {
}
export const TradeProposal_Reject: daml.Serializable<TradeProposal_Reject> = ({
  decoder: () => jtv.object({
  }),
})

export type IouTrade_Accept = {
  quoteIouCid: daml.ContractId<Iou.Iou>;
}
export const IouTrade_Accept: daml.Serializable<IouTrade_Accept> = ({
  decoder: () => jtv.object({
    quoteIouCid: daml.ContractId(Iou.Iou).decoder(),
  }),
})

export type IouTrade = {
  buyer: daml.Party;
  seller: daml.Party;
  baseIouCid: daml.ContractId<Iou.Iou>;
  baseIssuer: daml.Party;
  baseCurrency: string;
  baseAmount: daml.Numeric;
  quoteIssuer: daml.Party;
  quoteCurrency: string;
  quoteAmount: daml.Numeric;
}
export const IouTrade: daml.Template<IouTrade, undefined, 'f7592b50015725110188fe00bea8373fdcdceaeea90a1664682df422a9853b6e:IouTrade:IouTrade'> & {
  IouTrade_Accept: daml.Choice<IouTrade, IouTrade_Accept, Tuple2<daml.ContractId<Iou.Iou>, daml.ContractId<Iou.Iou>>, undefined>;
  Archive: daml.Choice<IouTrade, Archive, {}, undefined>;
  TradeProposal_Reject: daml.Choice<IouTrade, TradeProposal_Reject, {}, undefined>;
} = {
  templateId: 'f7592b50015725110188fe00bea8373fdcdceaeea90a1664682df422a9853b6e:IouTrade:IouTrade',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    buyer: daml.Party.decoder(),
    seller: daml.Party.decoder(),
    baseIouCid: daml.ContractId(Iou.Iou).decoder(),
    baseIssuer: daml.Party.decoder(),
    baseCurrency: daml.Text.decoder(),
    baseAmount: daml.Numeric(10).decoder(),
    quoteIssuer: daml.Party.decoder(),
    quoteCurrency: daml.Text.decoder(),
    quoteAmount: daml.Numeric(10).decoder(),
  }),
  IouTrade_Accept: {
    template: () => IouTrade,
    choiceName: 'IouTrade_Accept',
    argumentDecoder: IouTrade_Accept.decoder,
    resultDecoder: () => Tuple2(daml.ContractId(Iou.Iou), daml.ContractId(Iou.Iou)).decoder(),
  },
  Archive: {
    template: () => IouTrade,
    choiceName: 'Archive',
    argumentDecoder: Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
  TradeProposal_Reject: {
    template: () => IouTrade,
    choiceName: 'TradeProposal_Reject',
    argumentDecoder: TradeProposal_Reject.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(IouTrade);
