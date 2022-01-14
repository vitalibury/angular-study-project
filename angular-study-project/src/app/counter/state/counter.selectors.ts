import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CounterState } from "./counter.state";

export const featureSelector = createFeatureSelector<CounterState>('counter');

export const counterSelector = createSelector(featureSelector, state => state.count);

export const updateAtSelector = createSelector(featureSelector, state => state.updatedAt);