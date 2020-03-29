// Generated from Iou.daml
/* eslint-disable @typescript-eslint/camelcase */
/* eslint-disable @typescript-eslint/no-use-before-define */
import * as jtv from '@mojotech/json-type-validation';
import * as daml from '@daml/types';

import { Tuple2 } from '@ts/40f452260bef3f29dede136108fc08a88d5a5250310281067087da6f0baddff7';
import { Archive } from '@ts/d14e08374fc7197d6a0de468c968ae8ba3aadbf9315476fd39071831f5923662';

export type IouTransfer_Accept = {
}
export const IouTransfer_Accept: daml.Serializable<IouTransfer_Accept> = ({
  decoder: () => jtv.object({
  }),
})

export type IouTransfer_Reject = {
}
export const IouTransfer_Reject: daml.Serializable<IouTransfer_Reject> = ({
  decoder: () => jtv.object({
  }),
})

export type IouTransfer_Cancel = {
}
export const IouTransfer_Cancel: daml.Serializable<IouTransfer_Cancel> = ({
  decoder: () => jtv.object({
  }),
})

export type IouTransfer = {
  iou: Iou;
  newOwner: daml.Party;
}
export const IouTransfer: daml.Template<IouTransfer, undefined, 'f7592b50015725110188fe00bea8373fdcdceaeea90a1664682df422a9853b6e:Iou:IouTransfer'> & {
  IouTransfer_Cancel: daml.Choice<IouTransfer, IouTransfer_Cancel, daml.ContractId<Iou>, undefined>;
  IouTransfer_Reject: daml.Choice<IouTransfer, IouTransfer_Reject, daml.ContractId<Iou>, undefined>;
  Archive: daml.Choice<IouTransfer, Archive, {}, undefined>;
  IouTransfer_Accept: daml.Choice<IouTransfer, IouTransfer_Accept, daml.ContractId<Iou>, undefined>;
} = {
  templateId: 'f7592b50015725110188fe00bea8373fdcdceaeea90a1664682df422a9853b6e:Iou:IouTransfer',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    iou: Iou.decoder(),
    newOwner: daml.Party.decoder(),
  }),
  IouTransfer_Cancel: {
    template: () => IouTransfer,
    choiceName: 'IouTransfer_Cancel',
    argumentDecoder: IouTransfer_Cancel.decoder,
    resultDecoder: () => daml.ContractId(Iou).decoder(),
  },
  IouTransfer_Reject: {
    template: () => IouTransfer,
    choiceName: 'IouTransfer_Reject',
    argumentDecoder: IouTransfer_Reject.decoder,
    resultDecoder: () => daml.ContractId(Iou).decoder(),
  },
  Archive: {
    template: () => IouTransfer,
    choiceName: 'Archive',
    argumentDecoder: Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
  IouTransfer_Accept: {
    template: () => IouTransfer,
    choiceName: 'IouTransfer_Accept',
    argumentDecoder: IouTransfer_Accept.decoder,
    resultDecoder: () => daml.ContractId(Iou).decoder(),
  },
};
daml.registerTemplate(IouTransfer);

export type Iou_RemoveObserver = {
  oldObserver: daml.Party;
}
export const Iou_RemoveObserver: daml.Serializable<Iou_RemoveObserver> = ({
  decoder: () => jtv.object({
    oldObserver: daml.Party.decoder(),
  }),
})

export type Iou_AddObserver = {
  newObserver: daml.Party;
}
export const Iou_AddObserver: daml.Serializable<Iou_AddObserver> = ({
  decoder: () => jtv.object({
    newObserver: daml.Party.decoder(),
  }),
})

export type Iou_Transfer = {
  newOwner: daml.Party;
}
export const Iou_Transfer: daml.Serializable<Iou_Transfer> = ({
  decoder: () => jtv.object({
    newOwner: daml.Party.decoder(),
  }),
})

export type Iou_Merge = {
  otherCid: daml.ContractId<Iou>;
}
export const Iou_Merge: daml.Serializable<Iou_Merge> = ({
  decoder: () => jtv.object({
    otherCid: daml.ContractId(Iou).decoder(),
  }),
})

export type Iou_Split = {
  splitAmount: daml.Numeric;
}
export const Iou_Split: daml.Serializable<Iou_Split> = ({
  decoder: () => jtv.object({
    splitAmount: daml.Numeric(10).decoder(),
  }),
})

export type Iou = {
  issuer: daml.Party;
  owner: daml.Party;
  currency: string;
  amount: daml.Numeric;
  observers: daml.Party[];
}
export const Iou: daml.Template<Iou, undefined, 'f7592b50015725110188fe00bea8373fdcdceaeea90a1664682df422a9853b6e:Iou:Iou'> & {
  Iou_Split: daml.Choice<Iou, Iou_Split,Tuple2<daml.ContractId<Iou>, daml.ContractId<Iou>>, undefined>;
  Iou_Merge: daml.Choice<Iou, Iou_Merge, daml.ContractId<Iou>, undefined>;
  Iou_Transfer: daml.Choice<Iou, Iou_Transfer, daml.ContractId<IouTransfer>, undefined>;
  Iou_AddObserver: daml.Choice<Iou, Iou_AddObserver, daml.ContractId<Iou>, undefined>;
  Iou_RemoveObserver: daml.Choice<Iou, Iou_RemoveObserver, daml.ContractId<Iou>, undefined>;
  Archive: daml.Choice<Iou,Archive, {}, undefined>;
} = {
  templateId: 'f7592b50015725110188fe00bea8373fdcdceaeea90a1664682df422a9853b6e:Iou:Iou',
  keyDecoder: () => jtv.constant(undefined),
  decoder: () => jtv.object({
    issuer: daml.Party.decoder(),
    owner: daml.Party.decoder(),
    currency: daml.Text.decoder(),
    amount: daml.Numeric(10).decoder(),
    observers: daml.List(daml.Party).decoder(),
  }),
  Iou_Split: {
    template: () => Iou,
    choiceName: 'Iou_Split',
    argumentDecoder: Iou_Split.decoder,
    resultDecoder: () => Tuple2(daml.ContractId(Iou), daml.ContractId(Iou)).decoder(),
  },
  Iou_Merge: {
    template: () => Iou,
    choiceName: 'Iou_Merge',
    argumentDecoder: Iou_Merge.decoder,
    resultDecoder: () => daml.ContractId(Iou).decoder(),
  },
  Iou_Transfer: {
    template: () => Iou,
    choiceName: 'Iou_Transfer',
    argumentDecoder: Iou_Transfer.decoder,
    resultDecoder: () => daml.ContractId(IouTransfer).decoder(),
  },
  Iou_AddObserver: {
    template: () => Iou,
    choiceName: 'Iou_AddObserver',
    argumentDecoder: Iou_AddObserver.decoder,
    resultDecoder: () => daml.ContractId(Iou).decoder(),
  },
  Iou_RemoveObserver: {
    template: () => Iou,
    choiceName: 'Iou_RemoveObserver',
    argumentDecoder: Iou_RemoveObserver.decoder,
    resultDecoder: () => daml.ContractId(Iou).decoder(),
  },
  Archive: {
    template: () => Iou,
    choiceName: 'Archive',
    argumentDecoder: Archive.decoder,
    resultDecoder: () => daml.Unit.decoder(),
  },
};
daml.registerTemplate(Iou);
