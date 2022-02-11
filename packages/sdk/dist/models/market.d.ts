import { ApiPromise } from "@polkadot/api";
import { ISubmittableResult } from "@polkadot/types/types";
import Swap from "./swaps";
import { MarketResponse, ExtendedMarketResponse, FilteredMarketResponse, KeyringPairOrExtSigner, MarketCreation, MarketPeriod, Report, MarketDispute, DecodedMarketMetadata, CategoryMetadata, OutcomeReport, ScoringRule, MarketDisputeMechanism } from "../types";
import { Asset, MarketType } from "@zeitgeistpm/types/dist/interfaces";
declare class Market {
    marketId: number;
    slug: string;
    creator: string;
    creation: MarketCreation;
    creatorFee: number;
    oracle: string;
    period: MarketPeriod;
    scoringRule: ScoringRule;
    marketType: MarketType;
    status: string;
    report: Report | null;
    categories: CategoryMetadata[] | null;
    resolvedOutcome: OutcomeReport | null;
    end: BigInt;
    mdm: MarketDisputeMechanism;
    description: string;
    question: string;
    outcomeAssets: Asset[];
    tags: string[];
    confidential_id?: string;
    img?: string;
    private api;
    constructor(marketId: number, market: MarketResponse, decodedMetadata: DecodedMarketMetadata, api: ApiPromise);
    toJSONString(): string;
    toFilteredJSONString(filter?: string[] | null): string;
    static filterMarketData(market: ExtendedMarketResponse | MarketResponse | Market, filter?: string[] | null): FilteredMarketResponse;
    getEndTimestamp(): Promise<number>;
    getPoolId: () => Promise<number | null>;
    getPool: () => Promise<Swap | null>;
    getDisputes: () => Promise<MarketDispute[]>;
    deploySwapPool: (signer: KeyringPairOrExtSigner, weights: string[], callbackOrPaymentInfo?: boolean | ((result: ISubmittableResult, _unsub: () => void) => void)) => Promise<string>;
    assetSpotPricesInZtg(blockHash?: any): Promise<{
        [key: string]: string;
    }>;
    buyCompleteSet(signer: KeyringPairOrExtSigner, amount: number, callbackOrPaymentInfo?: ((result: ISubmittableResult, _unsub: () => void) => void) | boolean): Promise<string>;
    sellCompleteSet(signer: KeyringPairOrExtSigner, amount: number, callbackOrPaymentInfo?: ((result: ISubmittableResult, _unsub: () => void) => void) | boolean): Promise<string>;
    reportOutcome(signer: KeyringPairOrExtSigner, outcome: OutcomeReport, callbackOrPaymentInfo?: ((result: ISubmittableResult, _unsub: () => void) => void) | boolean): Promise<string>;
    dispute(signer: KeyringPairOrExtSigner, outcome: OutcomeReport, callbackOrPaymentInfo?: ((result: ISubmittableResult, _unsub: () => void) => void) | boolean): Promise<string>;
    redeemShares(signer: KeyringPairOrExtSigner, callbackOrPaymentInfo?: ((result: ISubmittableResult, _unsub: () => void) => void) | boolean): Promise<string | boolean>;
    approve(signer: KeyringPairOrExtSigner, callbackOrPaymentInfo?: ((result: ISubmittableResult, _unsub: () => void) => void) | boolean): Promise<string>;
    reject(signer: KeyringPairOrExtSigner, callbackOrPaymentInfo?: ((result: ISubmittableResult, _unsub: () => void) => void) | boolean): Promise<string>;
    cancelAdvised(signer: KeyringPairOrExtSigner, callbackOrPaymentInfo?: ((result: ISubmittableResult, _unsub: () => void) => void) | boolean): Promise<string>;
}
export default Market;
