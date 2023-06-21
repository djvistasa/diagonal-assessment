import { NativeStackScreenProps } from '@react-navigation/native-stack';

type RootStackParamList = {
  MovieListing: undefined;
};

type MovieListingProps = NativeStackScreenProps<
  RootStackParamList,
  'MovieListing'
>;

export type { MovieListingProps, RootStackParamList };
