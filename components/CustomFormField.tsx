"use client"
import { Control } from "react-hook-form"
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { FormFieldType } from "./ui/forms/PatientForm"

interface CustomProps{
  control:Control<any>
  fieldType:FormFieldType
}


const CustomFormField = ({control,fieldType}:CustomProps) => {
  return (
    <FormField
      control={control}
      name="username"
      render={({ field }) => (
        <FormItem>
          <FormLabel>Username</FormLabel>
          <FormControl>
            <Input placeholder="shadcn" {...field} />
          </FormControl>
          <FormDescription>
            This is your public display name.
          </FormDescription>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default CustomFormField