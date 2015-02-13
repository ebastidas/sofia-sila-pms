/**
 * CommandDescription.java
 *
 * This file was auto-generated from WSDL
 * by the Apache Axis 1.4 Apr 22, 2006 (06:55:48 PDT) WSDL2Java emitter.
 */

package org.sila_standard;

public class CommandDescription  implements java.io.Serializable {
    private int requestId;

    private java.lang.String commandName;

    private int queuePosition;

    private java.util.Calendar startedAt;

    private org.sila_standard.Substate currentState;

    private java.lang.Integer dataWaiting;

    public CommandDescription() {
    }

    public CommandDescription(
           int requestId,
           java.lang.String commandName,
           int queuePosition,
           java.util.Calendar startedAt,
           org.sila_standard.Substate currentState,
           java.lang.Integer dataWaiting) {
           this.requestId = requestId;
           this.commandName = commandName;
           this.queuePosition = queuePosition;
           this.startedAt = startedAt;
           this.currentState = currentState;
           this.dataWaiting = dataWaiting;
    }


    /**
     * Gets the requestId value for this CommandDescription.
     * 
     * @return requestId
     */
    public int getRequestId() {
        return requestId;
    }


    /**
     * Sets the requestId value for this CommandDescription.
     * 
     * @param requestId
     */
    public void setRequestId(int requestId) {
        this.requestId = requestId;
    }


    /**
     * Gets the commandName value for this CommandDescription.
     * 
     * @return commandName
     */
    public java.lang.String getCommandName() {
        return commandName;
    }


    /**
     * Sets the commandName value for this CommandDescription.
     * 
     * @param commandName
     */
    public void setCommandName(java.lang.String commandName) {
        this.commandName = commandName;
    }


    /**
     * Gets the queuePosition value for this CommandDescription.
     * 
     * @return queuePosition
     */
    public int getQueuePosition() {
        return queuePosition;
    }


    /**
     * Sets the queuePosition value for this CommandDescription.
     * 
     * @param queuePosition
     */
    public void setQueuePosition(int queuePosition) {
        this.queuePosition = queuePosition;
    }


    /**
     * Gets the startedAt value for this CommandDescription.
     * 
     * @return startedAt
     */
    public java.util.Calendar getStartedAt() {
        return startedAt;
    }


    /**
     * Sets the startedAt value for this CommandDescription.
     * 
     * @param startedAt
     */
    public void setStartedAt(java.util.Calendar startedAt) {
        this.startedAt = startedAt;
    }


    /**
     * Gets the currentState value for this CommandDescription.
     * 
     * @return currentState
     */
    public org.sila_standard.Substate getCurrentState() {
        return currentState;
    }


    /**
     * Sets the currentState value for this CommandDescription.
     * 
     * @param currentState
     */
    public void setCurrentState(org.sila_standard.Substate currentState) {
        this.currentState = currentState;
    }


    /**
     * Gets the dataWaiting value for this CommandDescription.
     * 
     * @return dataWaiting
     */
    public java.lang.Integer getDataWaiting() {
        return dataWaiting;
    }


    /**
     * Sets the dataWaiting value for this CommandDescription.
     * 
     * @param dataWaiting
     */
    public void setDataWaiting(java.lang.Integer dataWaiting) {
        this.dataWaiting = dataWaiting;
    }

    private java.lang.Object __equalsCalc = null;
    public synchronized boolean equals(java.lang.Object obj) {
        if (!(obj instanceof CommandDescription)) return false;
        CommandDescription other = (CommandDescription) obj;
        if (obj == null) return false;
        if (this == obj) return true;
        if (__equalsCalc != null) {
            return (__equalsCalc == obj);
        }
        __equalsCalc = obj;
        boolean _equals;
        _equals = true && 
            this.requestId == other.getRequestId() &&
            ((this.commandName==null && other.getCommandName()==null) || 
             (this.commandName!=null &&
              this.commandName.equals(other.getCommandName()))) &&
            this.queuePosition == other.getQueuePosition() &&
            ((this.startedAt==null && other.getStartedAt()==null) || 
             (this.startedAt!=null &&
              this.startedAt.equals(other.getStartedAt()))) &&
            ((this.currentState==null && other.getCurrentState()==null) || 
             (this.currentState!=null &&
              this.currentState.equals(other.getCurrentState()))) &&
            ((this.dataWaiting==null && other.getDataWaiting()==null) || 
             (this.dataWaiting!=null &&
              this.dataWaiting.equals(other.getDataWaiting())));
        __equalsCalc = null;
        return _equals;
    }

    private boolean __hashCodeCalc = false;
    public synchronized int hashCode() {
        if (__hashCodeCalc) {
            return 0;
        }
        __hashCodeCalc = true;
        int _hashCode = 1;
        _hashCode += getRequestId();
        if (getCommandName() != null) {
            _hashCode += getCommandName().hashCode();
        }
        _hashCode += getQueuePosition();
        if (getStartedAt() != null) {
            _hashCode += getStartedAt().hashCode();
        }
        if (getCurrentState() != null) {
            _hashCode += getCurrentState().hashCode();
        }
        if (getDataWaiting() != null) {
            _hashCode += getDataWaiting().hashCode();
        }
        __hashCodeCalc = false;
        return _hashCode;
    }

    // Type metadata
    private static org.apache.axis.description.TypeDesc typeDesc =
        new org.apache.axis.description.TypeDesc(CommandDescription.class, true);

    static {
        typeDesc.setXmlType(new javax.xml.namespace.QName("http://sila-standard.org", "CommandDescription"));
        org.apache.axis.description.ElementDesc elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("requestId");
        elemField.setXmlName(new javax.xml.namespace.QName("", "requestId"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("commandName");
        elemField.setXmlName(new javax.xml.namespace.QName("", "commandName"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "string"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("queuePosition");
        elemField.setXmlName(new javax.xml.namespace.QName("", "queuePosition"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("startedAt");
        elemField.setXmlName(new javax.xml.namespace.QName("", "startedAt"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "dateTime"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("currentState");
        elemField.setXmlName(new javax.xml.namespace.QName("", "currentState"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://sila-standard.org", "Substate"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
        elemField = new org.apache.axis.description.ElementDesc();
        elemField.setFieldName("dataWaiting");
        elemField.setXmlName(new javax.xml.namespace.QName("", "dataWaiting"));
        elemField.setXmlType(new javax.xml.namespace.QName("http://www.w3.org/2001/XMLSchema", "int"));
        elemField.setMinOccurs(0);
        elemField.setNillable(false);
        typeDesc.addFieldDesc(elemField);
    }

    /**
     * Return type metadata object
     */
    public static org.apache.axis.description.TypeDesc getTypeDesc() {
        return typeDesc;
    }

    /**
     * Get Custom Serializer
     */
    public static org.apache.axis.encoding.Serializer getSerializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanSerializer(
            _javaType, _xmlType, typeDesc);
    }

    /**
     * Get Custom Deserializer
     */
    public static org.apache.axis.encoding.Deserializer getDeserializer(
           java.lang.String mechType, 
           java.lang.Class _javaType,  
           javax.xml.namespace.QName _xmlType) {
        return 
          new  org.apache.axis.encoding.ser.BeanDeserializer(
            _javaType, _xmlType, typeDesc);
    }

}
