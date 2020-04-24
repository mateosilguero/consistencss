import React, { ReactNode } from 'react';
import {
  Text as RNText,
  TextProps,
  TouchableOpacity as RNTouchableOpacity,
  TouchableOpacityProps,
  View as RNView,
  ViewProps,
} from 'react-native';
import { components } from './constants';
import { apply } from './';

interface ComponentProps {
  children?: ReactNode;
}

interface TextInterface extends TextProps, ComponentProps {}
interface TouchableOpacityInterface
  extends TouchableOpacityProps,
    ComponentProps {}
interface ViewInterface extends ViewProps, ComponentProps {}

export const Text = ({ children, style = {}, ...rest }: TextInterface) => (
  <RNText style={apply(components.Text, style)} {...rest}>
    {children}
  </RNText>
);

export const TouchableOpacity = ({
  children,
  style = {},
  ...rest
}: TouchableOpacityInterface) => (
  <RNTouchableOpacity
    style={apply(components.TouchableOpacity, style)}
    {...rest}
  >
    {children}
  </RNTouchableOpacity>
);

export const View = ({ children, style = {}, ...rest }: ViewInterface) => (
  <RNView style={apply(components.View, style)} {...rest}>
    {children}
  </RNView>
);
