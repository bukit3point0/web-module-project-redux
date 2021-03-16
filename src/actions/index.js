export const ADD_FEATURE = "ADD_FEATURE"
export const DELETED_FEATURE = "DELETE_FEATURE"

export function addedFeatures (feature) {
    return {type: ADD_FEATURE, payload: feature}
}
export function deletedFeatures (feature) {
    return {type: DELETED_FEATURE, payload: feature}
}

// export {
//     addFeature
// }