type CategoryType =
  | 'aroma_candles'
  | 'designer_vases'
  | 'dried_flowers'
  | 'fresh_flowers'
  | 'fresheners'
  | 'live_plants'
  | 'others';

type FreshFlowersType =
  | 'autumn_symphony'
  | 'blazing_blassoms'
  | 'blue_harmony'
  | `dawn's_delight`
  | 'fresh_flowers_bg'
  | 'fresh_flowers_rep'
  | 'mystical_majesty'
  | 'pink_elegance'
  | 'rosy_delight'
  | 'rustic_charm'
  | 'serenity'
  | 'snowfall';

type DriedFlowersType =
  | 'dried_flowers_bg'
  | 'dried_flowers_rep'
  | 'frosty_winter'
  | 'rosy_perfection'
  | 'the_heath'
  | 'the_naomi'
  | 'the_savoy'
  | 'the_suri';

type LivePlantsType =
  | `bird's_nest_fern`
  | 'large_majesty_palm'
  | 'large_monstera_deliciosa'
  | 'live_plant_bg'
  | 'live_plant_rep'
  | 'money_tree'
  | 'the_fiddle_leaf_fig'
  | 'the_snake_plant';

type DesignerVasesType =
  | 'bernadotte_vase'
  | 'botanica_vase'
  | 'ceramic_vase'
  | 'clear_vase'
  | 'designer_vases_bg'
  | 'designer_vases_rep'
  | 'pot_vase'
  | 'slim_vase';

type AromaCandlesType =
  | 'aroma_candles_bg'
  | 'aroma_candles_rep'
  | 'bamboo'
  | 'charcoal_woods'
  | 'driftwood'
  | 'himalayan_salt_and_rosewater'
  | 'lime_and_matcha'
  | 'rattan_grapefruit';

type FreshenersType =
  | 'cedar_and_lavender'
  | 'driftwood'
  | 'fresheners_bg'
  | 'fresheners_rep'
  | 'grapefruit'
  | 'himalayan_salt_and_rosewater'
  | 'ocean_mist'
  | 'wild_mint_and_eucalyptus';

type OthersType = 'home_rep';

type CategoryMapping = {
  aroma_candles: AromaCandlesType;
  designer_vases: DesignerVasesType;
  dried_flowers: DriedFlowersType;
  fresh_flowers: FreshFlowersType;
  fresheners: FreshenersType;
  live_plants: LivePlantsType;
  others: OthersType;
};

type CategoryItemType<T extends CategoryType> = CategoryMapping[T];

interface FetchImgURL<T extends CategoryType> {
  category: T;
  name: CategoryItemType<T>;
}

type FitType =
  | 'clamp'
  | 'clip'
  | 'crop'
  | 'fill'
  | 'fillmax'
  | 'max'
  | 'min'
  | 'scale';

type CropType =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'faces'
  | 'entropy'
  | 'edges'
  | 'focalpoint';

type autoType = 'compress' | 'enhance' | 'true' | 'format' | 'redeye';

interface ImgOptimization {
  width: number;
  height: number;
  fit?: FitType;
  crop?: CropType[];
  auto?: autoType[];
  q?: number;
}

export const fetchImgURL = <T extends CategoryType>({
  category,
  name,
}: FetchImgURL<T>) => {
  return `https://todayflower.imgix.net/${category}/${name}.jpg`;
};

export const imgOptimization = ({
  width,
  height,
  fit,
  crop,
  auto = ['compress'],
  q,
}: ImgOptimization) => {
  const widthString = `w=${width}`;
  const heightString = `h=${height}`;
  const fitString = fit ? `fit=${fit}` : '';
  const cropString = crop && crop.length > 0 ? `crop=${crop.join(',')}` : '';
  const autoString = auto && auto.length > 0 ? `auto=${auto.join(',')}` : '';
  const qString = q ? `q=${q}` : '';

  const fullArr = [widthString, heightString];

  if (fitString) fullArr.push(fitString);
  if (cropString) fullArr.push(cropString);
  if (autoString) fullArr.push(autoString);
  if (qString) fullArr.push(qString);

  const fullUrl = '?' + fullArr.join('&');

  return fullUrl;
};
