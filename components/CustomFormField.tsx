"use client"
import { Control } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { FormFieldType } from "./ui/forms/PatientForm"
import React from "react"
import Image from "next/image"
import { E164Number } from "libphonenumber-js/core";
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css';
interface CustomProps {
  control: Control<any>
  fieldType: FormFieldType
  name: string
  label?: string
  placeholder?: string
  iconSrc?: string
  iconAlt?: string
  disabled?: boolean
  dateFormat?: string
  showTimeSelect?: boolean
  children?: React.ReactNode
  renderSkeleton?: (field: any) => React.ReactNode

}

const RenderInput = ({ field, props }: { field: any, props: CustomProps }) => {
 
  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <div className="flex rounded-md border border-dark-500 bg-dark-400">
          {props.iconSrc && (
            <Image src={props.iconSrc} alt={props.iconAlt || 'icon'} height={24} width={24} />
          )}

          <FormControl>
            <Input 
            placeholder={props.placeholder} {...field} className="shad-input border-0" />
          </FormControl>
        </div>
      )

    case FormFieldType.PHONE_INPUT: 
     return (
        <FormControl>
          <PhoneInput defaultCountry="US" placeholder={props.placeholder} international   withCountryCallingCode value={field.value as E164Number| undefined} 
          onChange={field.onChange} className="input-phone " />
        </FormControl>
     )


    default:
      break;
  }
}


const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex-1 ">
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderInput field={field} props={props} />
          <FormMessage className="shad-error" />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField